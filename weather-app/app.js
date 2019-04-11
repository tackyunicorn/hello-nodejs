const request = require('request')

const url = 'https://api.darksky.net/forecast/8b02b1368b6bf72267981515c35f8f5a/37.8267,-122.4233?units=si&lang=ja'

request({
	url: url,
	json: true
}, (error, response) => {
	console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
})