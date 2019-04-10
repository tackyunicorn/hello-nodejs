const fs = require('fs')

fs.writeFileSync('notes.txt' , 'My name is Joshua')

// Challenge Solved
fs.appendFileSync('notes.txt' , '\nI love Node.js!')