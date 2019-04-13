const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
	res.render('index', {
		title: 'Weather',
		name: 'Joshua Joseph'
	})
})

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About Me',
		name: 'Joshua Joseph'
	})
})

app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help',
		helpText: 'This is some helpful text',
		name: 'Joshua Joseph'
	})
})

app.get('/weather', (req, res) => {
	res.send({
		forecast: 'Humid',
		location: 'Kerala'
	})
})

app.get('/help/*', (req, res) => {
	res.render('404', {
		title: '404',
		errorMessage: 'Help article not found!',
		name: 'Joshua Joseph'
	})
})

app.get('*', (req, res) => {
	res.render('404', {
		title: '404',
		errorMessage: 'Page not found!',
		name: 'Joshua Joseph'
	})
})

app.listen(3000, () => {
	console.log('Server is up on port 3000')
})