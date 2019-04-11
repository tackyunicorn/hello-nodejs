const request = require('request')

const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoiam9zaGpvc2VwaDk3IiwiYSI6ImNqdWN2bXp2cTBmcTgzeWtidDN4MXgwajgifQ.UT3xhCP1QHNHFoMPwqYSMQ&limit=1'

const url = 'https://api.darksky.net/forecast/8b02b1368b6bf72267981515c35f8f5a/37.8267,-122.4233?units=si&lang=ja'

request({
	url: geoURL,
	json: true
}, (error, response) => {
	console.log('Latitude: ' + response.body.features[0].center[1])
	console.log('Longitude: ' + response.body.features[0].center[0])
})

request({
	url: url,
	json: true
}, (error, response) => {
	console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
})