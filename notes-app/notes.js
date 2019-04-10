const chalk = require('chalk')
const fs = require('fs')

const getNotes = function () {
	return 'Your notes...'
}

const addNote = function (title, body) {
	const notes = loadNotes()
	const duplicateNotes = notes.filter(function (note) {
		return note.title === title
	})

	if (duplicateNotes.length === 0) {
		notes.push({
			title: title,
			body: body
		})
		saveNotes(notes)
		console.log(chalk.green.inverse.bold('Note "' + title + '" added!'))
	} else {
		console.log(chalk.red.inverse.bold('Note "' + title + '" taken!'))
	}
}

const removeNote = function (title) {
	const notes = loadNotes()
	const keepNotes = notes.filter(function (note) {
		return note.title !== title
	})

	if (keepNotes.length != notes.length) {
		saveNotes(keepNotes)
		console.log(chalk.green.inverse.bold('Note "' + title + '" removed!'))
	} else {
		console.log(chalk.red.inverse.bold('Note "' + title + '" does not exist!'))
	}
}

const saveNotes = function (notes) {
	const dataJSON = JSON.stringify(notes)
	fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
	try {
		const dataBuffer = fs.readFileSync('notes.json')
		const dataJSON = dataBuffer.toString()
		return JSON.parse(dataJSON)
	} catch (e) {
		return []
	}
}

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote
}