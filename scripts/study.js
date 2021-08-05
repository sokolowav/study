//console.log('study.js added')

//const person = {
//	name: 'Alexandr',
//	age: 32,
//	isProgrammer: true,
//	languages: ['ru', 'en', 'de'],
//	//'complex key': 'complex value',
//	//['key_' + (1 + 3)]: 'computed key', //	key_4
//	greet() {
//		console.log('greet from person')
//	},
//	info() {
//		console.info('информация по человеку по имени', this.name)
//	},
//}

//console.log(person.name)
//console.log(person['isProgrammer'])
//const ageKey = 'complex key'
//console.log(person[ageKey])
//console.log('age')
//console.log(person['complex key'])
//
//person.greet()
//person.age++
//person.languages.push('by')
//person.languages.unshift('cz')
//person.languages.shift()
//
//delete person['key_4']
//console.log(person)
//console.log(person['key_4'])

//const name = person.name
//const age = person.age
//const languages = person.languages
//const { name, age: personAge = 32, languages } = person
//
//console.log(name, personAge, languages)

//for (let some in person) {
//	if (person.hasOwnProperty(some)) {
//		console.log('key:', some)
//		console.log('value:', person[some])
//	}
//}

//Object.keys(person).forEach(some => {
//console.log('key:', some)
//console.log('value:', person[some])
//})

//person.info()

//const logger = {
//	some(obj) {
//		console.log('object keys:', Object.keys(obj))
//	},
//}
//logger.some(person)

//const logger = {
//	some() {
//		console.log('object keys:', Object.keys(this))
//	},
//
//	//const bound = logger.some.bind(person)
//	//bound()
//	//
//
//	keysAndValues() {
//		Object.keys(this).forEach(some => {
//			console.log(`'${some}' : ${this[some]}`)
//		})
//	},
//}
//logger.keysAndValues.call(person)

//const logger = {
//	some() {
//		console.log('object keys:', Object.keys(this))
//	},
//
//	keysAndValues() {
//		//const self = this
//		//Object.keys(this).forEach(function (some) {
//		//	console.log(`'${some}' : ${self[some]}`)
//		//})
//		Object.keys(this).forEach(
//			function (some) {
//				console.log(`'${some}' : ${this[some]}`)
//			}.bind(this)
//		)
//	},
//	withParams(top = false, between = false, bottom = false) {
//		if (top) {
//			console.log('----start----')
//		}
//		Object.keys(this).forEach((some, index, array) => {
//			console.log(`'${some}' : ${this[some]}`)
//			if (between && index !== array.length - 1) {
//				console.log('-------')
//			}
//		})
//		if (bottom) {
//			console.log('----end----')
//		}
//	},
//}
//const newOne = logger.withParams.bind(person, true, true, true)
//

//const timeOut = setTimeout(() => {
//	console.log('After time out')
//}, 2500)
//clearTimeout(timeOut)
//const interval = setInterval(() => {
//	console.log('After interval')
//}, 2000)

//window.alert(1)

//let hello = document.getElementById('test')
//console.dir(hello)
//let hello2 = hello.previousElementSibling
//console.dir(hello2)
//hello2.style.margin = '0'
//let hello3 = hello2.children[0]
//console.dir(hello3)
//hello3.attributes[3].nodeValue = 'black'

//setTimeout(() => {
//	changeClassTo(hello, 'Практикуйся, падла!', 'blue', 25)
//}, 2000)
//
//function changeClassTo(node, text, color = 'red', fontSize) {
//	node.textContent = text
//	node.style.color = color
//	node.style.backgroundColor = 'white'
//	if (fontSize) node.style.fontSize = fontSize + 'px'
//}
//
//hello.onclick = () => {
//	if (hello.style.color === 'blue') {
//		hello.style.color = 'black'
//	} else {
//		hello.style.color = 'blue'
//	}
//}
//_______________________________________________________________________________________

//const how = document.querySelector('#how')
//console.dir(how)
//how.style.color = 'green'
//how.onclick = () => how.style.color === 'green'? how.style.color='blue': how.style.color = 'green'

//const lastname = prompt(`What's ur surname, dude?`)
//const firstname = 'Alex'
//alert( 'Greetings, ' + firstname + ' ' + lastname + '!' )
//console.dir(lastname)
//const a=5, b=10, c='FalcOne', d= true
//console.log(typeof a, typeof b)
//console.log(typeof c)
//console.log(typeof d)

//-------------------------------------Функции----------------------------------------
//
//function calculateAge(year) {
//	return 2021 - year
//}
////console.log (calculateAge(1988))
//
//function dataPerson(name, year) {
//	const age = calculateAge(year)
//	age >= 0 ? console.log('Человеку по имени ' + name + ' в этом году стукнет ' + age + ' года') :
//	 console.log('Человек по имени ' + name + ' еще не родился...')
//}
//
//dataPerson('Александр', 1988)
//dataPerson('Джозефина', 3000)

//-------------------------------------Массивы-----------------------------------------
//const cars = ['Lada', 'UAZ', 'Volga']
//console.log(cars)
//console.log(cars.length)
//cars[3] = 'KAMAZ'
//console.log(cars)

//-------------------------------------Циклы--------------------------------------------
//for (let car of cars) {
//	console.log(car)
//}
//-------------------------------------Объекты-------------------------------------------
//const person = {
//	name: 'Alexandr',
//	age: 32,
//	isProgrammer: true,
//	languages: ['ru', 'en', 'de'],
//	'complex key': 'complex value',
//	['key_' + (1 + 3)]: 'computed key', //	key_4
//	greet() {
//		console.log('greet from person')
//	},
//	info() {
//		console.info('информация по человеку по имени', this.name)
//	},
//}

//-------------------------------------СТРОКИ----------------------------------------------
//const key = 'languages'
//console.log(person[key])
//console.log(person.name.charAt(5))
//console.log(person.name.indexOf('Z'))
//console.log(person.name.toLowerCase().startsWith('alex'))
//console.log(person.name.startsWith('alex'))

//const string = '   someTabs   '
//console.log(string.trim())
//console.log(string.trimLeft())
//console.log(string.trimRight())

//Шаблонизация
//function infoPerson(x, name, age) {
//	if (age < 0) {
//		return `Человек по имени ${name} еще не родился`
//	} else {
//		return `${x[0]}${name}${x[1]}${age}${x[2]}`
//	}
//}
//const personName = 'Александр'
//const personAge = 32
//const personName2 = 'Хрюшкозавр'
//const personAge2 = -15
//const output = infoPerson`Человек по имени ${personName}, которому ${personAge} лет.`
//const output2 = infoPerson`Человек по имени ${personName2}, которому ${personAge2} лет.`
//console.log(output)
//console.log(output2)

//-------------------------------------ФУНКЦИИ----------------------------------------
//Анонимные ф-ии
//let counter = 0
///*const interval = */ setInterval(function () {
//	if (counter === 5) {
//		clearInterval(/*interval*/)
//	} else {
//		console.log(++counter)
//	}
//}, 1000)

//Функции с неграниченным кол-ом аргументов
//function sumAll(...all) {
//	let result = 0
//	for (let num of all) {
//		result += num
//		//console.log(result)
//	}
//	return result
//}
//const res = sumAll(1, 2, 34, 5, 6, 6, 7, 0)
//console.log(res)

//Замыкание ф-ии
//function data(name) {
//	return function (lastName) {
//		console.log(name + ' ' + lastName)
//	}
//}
//const logWithLastName = data('Alex')
//console.log(logWithLastName('FalcOne'))
//console.log(logWithLastName('FalcFour'))

//-------------------------------------МАССИВЫ----------------------------------------

//const people = [
//	{ name: 'Alexandr', budget: 5000 },
//	{ name: 'Antonina', budget: 6000 },
//	{ name: 'Andrew', budget: 4500 },
//]
//const index = people.findIndex(function (person) {
//	return person.budget === 4500
//})
//console.log(index)
//console.log(people[index])

//const pers = people.find(pers => pers.budget === 4500)
//console.log(pers)
//
//let findedPerson
//for (const pers of people) {
//	if (pers.budget === 5000) {
//		findedPerson = pers
//	}
//}
//console.log(findedPerson)

//console.log(cars.includes('Volga'))

//const toUpperCase = cars.map(car => car.toUpperCase())
//console.log(toUpperCase)

//const allBudget = people
//	.filter(person => person.budget >= 5000)
//	.reduce((acc, person) => {
//		acc += person.budget
//		return acc
//	}, 0)
//console.log(allBudget)

//-------------------------------------ОБЪЕКТЫ----------------------------------------

//const person = {
//	name: 'Alexandr',
//	age: 32,
//	isProgrammer: true,
//	languages: ['ru', 'en', 'de'],
//	//'complex key': 'complex value',
//	//['key_' + (1 + 3)]: 'computed key', //	key_4
//	greet() {
//		console.log('greet from person')
//	},
//	info() {
//		console.info('информация по человеку по имени', this.name)
//	},
//}

//delete person['key_4']
//let name = person.name
//let age = person.age
//const { name, age: personAge = 100, key_4 } = person
//console.log(name, personAge, key_4)

//for (let key in person) {
//	if (person.hasOwnProperty(key)) {
//		console.log(key)
//		console.log(person[key])
//	}
//}

//Object.keys(person).forEach(key => {
//	console.log(key)
//	console.log(person[key])
//})

//const logger = {
//	keys() {
//		console.log('Ключи объекта: ', Object.keys(this))
//	},
//	keysAndValues() {
//		Object.keys(this).forEach(some => {
//			console.log(`Ключ '${some}', и его значение: ${this[some]}`)
//		})
//	},
//	withParams(top = false, middle = false, bottom = false) {
//		if (top) console.log('---------Start---------')
//		Object.keys(this).forEach((some, index, array) => {
//			console.log(`Ключ '${some}', и его значение: ${this[some]}`)
//			if (middle && index !== array.length - 1)
//				console.log('-----------------------')
//		})
//		if (bottom) console.log('---------End---------')
//	},
//}

//const b = logger.keys.bind(person)
//b()

//logger.keys.call(person)
//logger.keysAndValues.call({ a: 1, b: 'shitlessness' })
//logger.withParams.call(person, true, true, true)

//-------------------------------------АСИНХРОННОСТЬ----------------------------------------
