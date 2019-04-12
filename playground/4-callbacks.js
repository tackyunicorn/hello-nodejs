// setTimeout(() => {
// 	console.log('2 seconds are up')
// }, 2000)

// const names = ['Joshua', 'Andrew', 'Jen']
// const shortNames = names.filter((name) => {
// 	return name.length <= 4
// })

// const geoCode = (address, callback) => {
// 	setTimeout(() => {
// 		const data = {
// 			latitude: 0,
// 			longitude: 0
// 		}
// 		callback(data)
// 	}, 2000)
// }

// geoCode('Philadelphia', (data) => {
// 	console.log(data)
// })

const add = (a, b, callback) => {
	setTimeout(() => {
		const c = a + b
		callback(c)
	}, 2000)
}

add(1, 4, (sum) => {
	console.log(sum) // Should print: 5
})