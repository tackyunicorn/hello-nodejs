const request = require('request')

const url = 'https://api.darksky.net/forecast/8b02b1368b6bf72267981515c35f8f5a/37.8267,-122.4233'

request({
	url: url
}, (error, response) => {
	const data = JSON.parse(response.body)
	console.log(data.currently)
})