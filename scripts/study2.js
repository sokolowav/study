//console.log('study2.js added')

//------------------------------Прототипы-------------------------------------

//const person = {
//	name: 'Antonina',
//	age: 18,
//	greet() {
//		console.log('Greetings!')
//	},
//}
//
//Object.prototype.sayHello = () => console.log('Hello!')
//const Lena = Object.create(person)
//Lena.name = 'Elena'
//console.log(person)
//
//const str = new String('I am da string')

//---------------------------------Контекcт------------------------------------

//function hello() {
//	console.log('Hello, mutterfickers', this)
//}
//
//const person = {
//	name: 'Alexandr',
//	age: 27,
//	sayHello: hello,
//	sayHelloWindow: hello.bind(this),
//	logInfo(job, phone) {
//		console.group(`${this.name} info:`)
//		console.log(`Name is ${this.name}.`)
//		console.log(`Age is ${this.age}.`)
//		console.log(`Job is ${job}.`)
//		console.log(`Phone is ${phone}.`)
//		console.groupEnd()
//	},
//}
//
//const lady = {
//	name: 'Antonina',
//	age: 18,
//}
//
//person.logInfo.bind(lady, 'Webtester', '8(999)222-33-11')()
//person.logInfo.call(lady, 'Webtester', '8(999)222-33-11')
//person.logInfo.apply(lady, ['Webtester', '8(999)222-33-11'])

//----------------------------------------------------------------------

//const array = [1, 2, 3, 4, 5]
//function multX(arr, n) {
//	return arr.map(function (i) {
//		return n * i
//	})
//}
//
//console.log(multX(array, 10))

//Array.prototype.multX = function (n) {
//	return this.map(function (i) {
//		return n * i
//	})
//}
//
//console.log(array.multX(20))

//---------------------------------Замыкание------------------------------------

//function createCalcFunction(n) {
//	return function () {
//		console.log(1000 * n)
//	}
//}
//
//const some = createCalcFunction(42)
//some()

//----------------------------------Практика----------------------------------

//function logPerson() {
//	console.log(
//		`Person: ${this.name} , age: ${this.age} , job: ${this.job}, mob: ${this.mob}.`
//	)
//}
//const person1 = {
//	name: 'Alexandr',
//	age: 25,
//	job: 'Frontend',
//	mob: '89993232321',
//}
//const person2 = {
//	name: 'Nina',
//	age: 18,
//	job: 'SMM',
//	mob: '89993232321',
//}
//
//function bind(context, fn) {
//	return function (...args) {
//		fn.apply(context, args)
//	}
//}
//
//bind(person1, logPerson)()
//bind(person2, logPerson)()

//----------------------------------Асинхронность----------------------------------

//console.log('Start 1')
//console.log('Start 2')
//window.setTimeout(function () {
//	console.log('After 2 seconds')
//}, 2000)
//console.log('End')
//function timeout5sec() {
//	console.log('After 5sec')
//}
//setTimeout(timeout5sec, 5000)

//----------------------------------Промисы-----------------------------------------

//const p = new Promise(function (resolve, reject) {
//	setTimeOut(() => {
//		console.log('prepairing data')
//		const backendData = {
//			server: 'aws',
//			port: 3000,
//			status: 'Working',
//		}
//		resolve(backendData)
//	}, 3000)
//})

//let promise = new Promise(function (resolve, reject) {
//	setTimeout(() => {
//		console.log('prepairing data')
//		//resolve(console.log('done'))
//		resolve()
//	}, 1000)
//})

//const p = new Promise(function (resolve, reject) {
//	setTimeOut(() => {
//		console.log('prepairing data')
//		const backendData = {
//			server: 'aws',
//			port: 3000,
//			status: 'Working',
//		}
//		resolve(backendData)
//	}, 3000)
//})

//console.log('Request some data')
//setTimeout(() => {
//	console.log('Preparing some data')
//	const someData = {
//		server: 'aws',
//		port: '3000',
//		status: 'In progress',
//	}
//	setTimeout(() => {
//		someData.modifyed = true
//		console.log('Data was prepared', someData)
//	}, 3000)
//}, 2000)

//console.log('Request some data')
//
//let p = new Promise(function (resolve, reject) {
//	setTimeout(() => {
//		console.log('Preparing some Data')
//		const someData = {
//			server: 'aws',
//			port: '3000',
//			status: 'In progress',
//		}
//		resolve(someData)
//	}, 2000)
//})
//
//p.then(data => {
//	return new Promise((resolve, reject) => {
//		setTimeout(() => {
//			data.modified = true
//			resolve(data)
//		}, 3000)
//	})
//		.then(clientData => {
//			console.log('Data was received', clientData)
//			clientData.newKey = true
//			return clientData
//		})
//		.then(data => {
//			console.log('Modified', data)
//		})
//		.catch(err => console.error('Error:', err))
//		.finally(() => console.log('Finally'))
//})

//const sleep = ms => {
//	return new Promise(resolve => setTimeout(() => resolve(), ms))
//}
//sleep(2000).then(() => console.log('Promise after 2sec'))

//----------------------------------Объекты-----------------------------------------

//const person = Object.create(
//	{
//		calculateAge() {
//			console.log('Age is ', new Date().getFullYear() - this.birthYear)
//		},
//	},
//	{
//		name: {
//			value: 'Alex',
//			enumerable: true,
//			writable: true,
//			configurable: true,
//		},
//		birthYear: {
//			value: 1988,
//			enumerable: false,
//			writable: false,
//			configurable: false,
//		},
//		age: {
//			get() {
//				return new Date().getFullYear() - this.birthYear
//			},
//			set(value) {
//				console.log('Set age ', value)
//				document.body.style.backgroundColor = 'black'
//			},
//		},
//	}
//)
//
//for (let key in person) {
//	console.log('key: ', key, person[key])
//}
//
//console.log(person)

//----------------------------------Классы--------------------------------------------

//class Animal {
//	constructor(options) {
//		this.name = options.name
//		this.age = options.age
//		this.hasTail = options.hasTail
//	}
//	voice() {
//		console.log('Miay-miay!')
//	}
//}

//const animal = new Animal({
//	name: 'Animal',
//	age: 5,
//	hasTail: true,
//})

//class Cat extends Animal {
//	static type = 'CAT'
//	constructor(options) {
//		super(options)
//		this.color = options.color
//	}
//	voice() {
//		console.log('Miu-miu-miu!')
//		super.voice()
//	}
//	get ageInfo() {
//		return this.age * 7
//	}
//	set ageInfo(newAge) {
//		this.age = newAge
//	}
//}
//
//const cat = new Cat({
//	name: 'Cat',
//	age: 7,
//	hasTail: true,
//	color: 'black',
//})

//class Component {
//	constructor(selector) {
//		this.$el = document.querySelector(selector)
//	}
//	show() {
//		this.$el.style.display = 'block'
//	}
//	hide() {
//		this.$el.style.display = 'none'
//	}
//}
//
//class Box extends Component {
//	constructor(options) {
//		super(options.selector)
//		this.$el.style.width = this.$el.style.height = options.size + 'px'
//		this.$el.style.background = options.color
//	}
//}
//
//const box1 = new Box({
//	selector: '#box1',
//	size: 100,
//	color: 'red',
//})
//
//const box2 = new Box({
//	selector: '#box2',
//	size: 150,
//	color: 'blue',
//})
//
//class Circle extends Box {
//	constructor(options) {
//		super(options)
//		this.$el.style.borderRadius = '50%'
//	}
//}
//
//const c = new Circle({
//	selector: '#circle',
//	size: 200,
//	color: 'yellow',
//})

//----------------------------------Async, wait--------------------------------------------

//const delay = ms => {
//	return new Promise(r => setTimeout(() => r(), ms))
//}
//
//delay(2000).then(() => console.log('2 seconds'))
//
//const url = 'https://jsonplaceholder.typicode.com/todos'

//function fetchTodos() {
//	console.log('Fetch to do start')
//	return delay(2000)
//		.then(() => fetch(url))
//		.then(response => response.json())
//}
//
//fetchTodos()
//	.then(data => {
//		console.log('Data: ', data)
//	})
//	.catch(e => console.error('Error:', e))

//async function fetchAsyncTodos() {
//	console.log('Fetch to do start')
//	try {
//		await delay(2000)
//		const response = await fetch(url)
//		const data = await response.json()
//		console.log('Data: ', data)
//	} catch (e) {
//		console.error(e)
//	}
//}
//fetchAsyncTodos()
//
//----------------------------------Proxy----------------------------------------------
//----------------------------------Objects--------------------------------------------

//const person = {
//	name: 'Alex',
//	age: 25,
//	job: 'Front-end',
//}
//
//const op = new Proxy(person, {
//	get(target, prop) {
//		//console.log('Target: ', target)
//		//console.log('Prop: ', prop)
//		//console.log(`Getting prop ${prop}...`)
//		if (!(prop in target)) {
//			return prop
//				.split('_')
//				.map(p => target[p])
//				.join(' ')
//		}
//		return target[prop]
//	},
//	set(target, prop, value) {
//		if (prop in target) {
//			target[prop] = value
//		} else {
//			throw new Error(`No prop ${prop} in the target:(`)
//		}
//	},
//	has(target, prop) {
//		return ['age', 'name', 'job'].includes(prop)
//	},
//	deleteProperty(target, prop) {
//		console.log(`Prop ${prop} has been deleted.`)
//		delete target[prop]
//		return true
//	},
//})
//
//----------------------------------Functions------------------------------------------

//const log = text => `Log: ${text}`
//
//const fp = new Proxy(log, {
//	apply(target, thisArg, args) {
//		console.log('Calling fn...')
//
//		return target.apply(thisArg, args).toUpperCase()
//	},
//})

//----------------------------------Classes--------------------------------------------

//class Person {
//	constructor(name, age) {
//		this.name = name
//		this.age = age
//	}
//}
//
//const PersonProxy = new Proxy(Person, {
//	construct(target, args) {
//		console.log('Construct...')
//		return new Proxy(new target(...args), {
//			get(t, prop) {
//				console.log(`Getting prop ${prop}.`)
//				return t[prop]
//			},
//		})
//	},
//})
//
//const p = new PersonProxy('Nina', 18)

//const person = {
//	name: 'alex',
//	age: 25,
//	keys: true,
//	test() {
//		const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//		let [number1, number2, ...arr2] = arr
//		console.log(number1)
//		console.log(number2)
//		//console.log(number3)
//		console.log(arr2)
//	},
//	hello() {
//		console.log(this.toString())
//		Object.entries(person).forEach(entry => {
//			console.log(entry)
//			console.log('persons key:', key)
//			console.log('persons value:', this.key)
//		})
//	},
//}
//
//document.body.innerHTML = '<h2>Hello from JS</h2>'
