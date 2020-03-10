// function changeEnough(change, amountDue) {
// 	money = []
// 	money.push(change[0] *.25)
// 	money.push(change[1] *.10)
// 	money.push(change[2] *.5)
// 	money.push(change[3] *.01)
// 	total = money.reduce((accumulator, currentValue) => accumulator + currentValue,
//   0)
// 	if (total < amountDue) {
//         console.log("false")
// 		return false
// 	} else {
//         console.log(total)
//         console.log("true")
// 		return true
// 	}
// }

// changeEnough([1, 0, 5, 219], 19.99)

// function retrieveMajor(semver) {
// 	const version = semver.split('.')
//     console.log(version[0])
//     return version[0]
// }

// function retrieveMinor(semver) {
// 	const version = semver.split('.')
//     console.log(version[1])
//     return version[1]
// }

// function retrievePatch(semver) {
// 	const version = semver.split('.')
//     console.log(version[2])
//     return version[2]
// }


// retrieveMajor("6.1.9")
// retrieveMinor("6.1.9")
// retrievePatch("6.1.9")

// retrieveMajor("2.1.0")
// retrieveMinor("2.1.0")
// retrievePatch("2.1.0")

// retrieveMajor("5.12.13")
// retrieveMinor("5.12.13")
// retrievePatch("5.12.13")

// function canCapture([yourRook, opponentsRook]) {
// 	if (yourRook.charAt(0) === opponentsRook.charAt(0) || yourRook.charAt(1) === opponentsRook.charAt(1)) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

// canCapture(['A8', 'E8'])
// canCapture(['A1', 'B2'])
// canCapture(['H4', 'H3'])
// canCapture(['F5', 'C8'])
// canCapture(['G3', 'G7'])
// canCapture(['B3', 'B2'])
// canCapture(['F5', 'B2'])
// canCapture(['H5', 'C8'])

// function removeVowels(str) {
// 	var regex = /[aeiou]/gi;
// 	console.log(str.replace(regex, ''))
//   return str.replace(regex, '')
// }

// removeVowels('ben')
// removeVowels('many')
// removeVowels('candy')
// removeVowels('hello')
// removeVowels('apple')
// removeVowels('fever')

// function netPresentValue(pv, ir, years) {
// 	if (Math.sign(pv) === -1 || Math.sign(ir) === -1 || Math.sign(years) === -1) {
// 		return false
// 	} else {
// 		const value = Math.round(pv *(1 - Math.pow((1 + ir), -years)) / ir)
// 		console.log(`$${value}`)
// 		return `$${value}`;
// 	}
// }

// netPresentValue(100, 0.10, 1)
// netPresentValue(100, 0.2, 1)
// netPresentValue(100, 0.1, 20)
// netPresentValue(10000, 0.05, 20)
// netPresentValue(250, 0.01, 1)
// netPresentValue(250, 0.01, -1)
// netPresentValue(15, 0.50, 100)

// function keysAndValues(obj) {
// 	console.log([Object.keys(obj), Object.values(obj)])
// 	return ([Object.keys(obj), Object.values(obj)])
// }

// keysAndValues({a: 1, b: 2, c: 3})
// keysAndValues({a: "Apple", b: "Microsoft", c: "Google"})
// keysAndValues({key1: true, key2: false, key3: undefined})
// keysAndValues({1: null, 2: null, 3: null})
// keysAndValues({key1: "cat", key2: "dog", key3: null})


// function solveForExp(a, b) {
// 	return Math.round(Math.log(b) / Math.log(a));
// }

// solveForExp(4, 1024)
// solveForExp(2, 1024)
// solveForExp(9, 3486784401)
// solveForExp(4, 4294967296)
// solveForExp(8, 134217728)
// solveForExp(19, 47045881)
// solveForExp(10, 100000000)

// function wordNest(word, nest) {
// 	console.log((nest.length / word.length)-1);
// 	return ((nest.length / word.length)-1);
// }

// wordNest("engagement", "engenengagemengagemeengagementntentgagementagement")
// wordNest("passage", "passpassageage")
// wordNest("factory", "ffacfactofactfafactoryctoryoryrytoryactory")
// wordNest("deny", "ddededdddenyenyenyenynynyeny")
// wordNest("jinx", "jijijjijjijijjinxinxnxnxinxnxinxnxnx")
// wordNest("deal", "dedddealealealal")
// wordNest("paradox", "parparaparadoxdoxadox")
// wordNest("meet", "mmememmeeteeteteteet")
// wordNest("last", "lalastst")
// wordNest("silence", "sisilsisilencelenceencelence")
// wordNest("inflate", "inflate")
// wordNest("ruin", "rurrurrrrrrururuinininuinuinuinuinuininuinin")
// wordNest("episode", "episoepisepisepiepiepiepisoepisodedesodesodesodeodeodede")
// wordNest("dictate", "dictadicdidictdiddictadictadictateteteictatectateatectatetatete")
// wordNest("caller", "callcacacalccallcacaccallerallerllerllererallerlerllerllerer")
// wordNest("sweater", "sweatsweswsweatereateraterer")
// wordNest("measure", "measumememeasumemmeasmmeasureeasureureeasureasurereasureasurere")
// wordNest("relieve", "relierelierelrelierrelieveelieveveieveveve")
// wordNest("home", "hohohohhohohhhohhomeomemeomeomememeomemememe")
// wordNest("profession", "profesprofessionsion")
// wordNest("continuous", "contcontcontinuoconcocontinuousntinuoustinuoususinuousinuous")

// function sevenBoom(arr) {
// 	const singleNum = arr.join('')
// 	if (/7/.test(singleNum)) {
// 			return "Boom!";
// 		} else {
// 			return "there is no 7 in the array";
// 		}
// }

// sevenBoom([2, 6, 7, 9, 3])
// sevenBoom([33, 68, 400, 5])
// sevenBoom([86, 48, 100, 66])
// sevenBoom([76, 55, 44, 32])
// sevenBoom([35, 4, 9, 37])

// function towerHanoi(discs) {
// 	return (Math.pow(2, discs) -1)
// }

// towerHanoi(3)
// towerHanoi(5)
// towerHanoi(8)
// towerHanoi(19)
// towerHanoi(9)
// towerHanoi(13)
// towerHanoi(0)

// function sumOfCubes(nums) {
// 	const newNums = nums.map(num => num ** 3)
// 	let sum = newNums.reduce(
//   ( accumulator, currentValue ) => accumulator + currentValue,
//   0)
// 	return sum
// }

// sumOfCubes([1, 5, 9])
// sumOfCubes([3, 4, 5])
// sumOfCubes([1, 1, 1])
// sumOfCubes([2])
// sumOfCubes([5, 1, 2])
// sumOfCubes([32])
// sumOfCubes([5, 9, 4, 4, 9])
// sumOfCubes([0, 1, 2])
// sumOfCubes([])

// function countVowels(str) {
// 	const vowels = /[a/e/i/o/u]/gi;
// 	const found = str.match(vowels);
// 	return found.length
// }

// countVowels("Celebration")
// countVowels("Palm")
// countVowels("Prediction")
// countVowels("Suite")
// countVowels("Quote")
// countVowels("Portrait")
// countVowels("Steam")
// countVowels("Tape")
// countVowels("Nightmare")
// countVowels("Convention")

// function concat(...args) {
// 	array = [...args]
// 	return array.flat();
// }

// concat([1, 2, 3], [4, 5], [6, 7])
// concat([1], [2], [3], [4], [5], [6], [7])
// concat([1, 2], [3, 4])
// concat([4, 4, 4, 4, 4])
// concat(['a'], ['b', 'c'])

// function filterArray(arr) {
// 	arr2 =[]
// 	arr.forEach(ele => {
// 		if (typeof(ele) === "number") {
// 			arr2.push(ele)
// 		} else {
// 			console.log(typeof(ele))
// 		}
// 	})
// 	return arr2
// }

// filterArray([1, 2, "a", "b"])
// filterArray([1, "a", "b", 0, 15])
// filterArray([1, 2, "aasf", "1", "123", 123])
// filterArray(["jsyt", 4, "yt", 6])
// filterArray(["r", 5, "y", "e", 8, 9])
// filterArray(["a", "e", "i", "o", "u"])
// filterArray([4, "z", "f", 5])
// filterArray(["abc", 123])
// filterArray(["$%^", 567, "&&&"])
// filterArray(["w", "r", "u", 43, "s", "a", 76, "d", 88])

// function triangle(n) {
// 	return(n*(n+1)/2)
// }

// triangle(1)
// triangle(2)
// triangle(3) 
// triangle(8)
// triangle(2153)

// function convertBinary(str) {
// 	var am = str.replace(/[a-m]/gi, '0')
// 	var nz = am.replace(/[n-z]/gi, '1')
// 	console.log(nz)
// 	return nz 
// }

// convertBinary("house")
// convertBinary("excLAIM")
// convertBinary("moon")
// convertBinary("MOOn")
// convertBinary("topsyTurvy")

// function doubleChar(str) {
// 	let split = str.split('')
// 	let repeat = split.map(char => {
// 		return char.repeat(2)
// 	})
// 	join = repeat.join("")
// 	return(join)
// }

// doubleChar("String")
// doubleChar("Hello World!")
// doubleChar("1234!_ ")
// doubleChar("##^&%%*&%%$#@@!")
// doubleChar("scandal")
// doubleChar("economics")
// doubleChar(" ")
// doubleChar("_______")
// doubleChar("equip gallon read")
// doubleChar("baby increase")

// function getBudgets(arr) {
// 	let budgets = arr.map(person => {
// 		return person.budget
// 	});
// 	const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 	console.log(budgets.reduce(reducer));
// }

// getBudgets([{name: "John",  age: 21, budget: 23000}, {name: "Steve",  age: 32, budget: 40000}, {name: "Martin",  age: 16, budget: 2700}])
// getBudgets([{name: "John",  age: 21, budget: 29000}, {name: "Steve",  age: 32, budget: 32000}, {name: "Martin",  age: 16, budget: 1600}])
// getBudgets([{name: "John",  age: 21, budget: 19401}, {name: "Steve",  age: 32, budget: 12321}, {name: "Martin",  age: 16, budget: 1204}])
// getBudgets([{name: "John",  age: 21, budget: 10234}, {name: "Steve",  age: 32, budget: 21754}, {name: "Martin",  age: 16, budget: 4935}])

// function myPi(n) {
// 	return  (Number.parseFloat(Math.PI).toFixed(n))
// }

// myPi(0)
// myPi(1)
// myPi(2)
// myPi(3)
// myPi(5)
// myPi(6)
// myPi(7)
// myPi(8)
// myPi(9)
// myPi(10)
// myPi(11)
// myPi(12)
// myPi(13)
// myPi(14)
// myPi(15)

// function charIndex(word, char) {
// 	arr = []
// 	if (word.includes(char)) {
// 		arr.push(word.indexOf(char))
// 		arr.push(word.lastIndexOf(char))
// 		console.log(arr)
// 		return arr
// 	} else {
// 		return undefined
// 	}
// }

// charIndex('hello', 'l')
// charIndex('circumlocution', 'r')
// charIndex('circumlocution', 'i')
// charIndex('circumlocution', 'c')
// charIndex('happy', 'h')
// charIndex('happy', 'p')
// charIndex('happy', 'e')

// function societyName(friends) {
// 	const secretSociety = friends.map((friend) => friend[0])
// 	.sort()
// 	.join('')
// 	return secretSociety
// }

// societyName(['Adam', 'Sarah', 'Malcolm'])
// societyName(['Phoebe', 'Chandler', 'Rachel', 'Ross', 'Monica', 'Joey'])
// societyName(['Harry', 'Newt', 'Luna', 'Cho'])
// societyName(['Sherlock', 'Irene', 'John'])
// societyName(['Sheldon', 'Amy', 'Penny', 'Howard', 'Raj'])

// function set(arr) {
// 	newArr = []
// 	arr.map(char => {
// 		if (newArr.indexOf(char) === -1) {	
// 			newArr.push(char)
// 		} 
// 	})
// 	console.log(newArr)
// }

// set([1, 3, 3, 5, 5])
// set([4, 4, 4, 4])
// set([5, 7, 8, 9, 10, 15])
// set([5, 9, 9])
// set([1, 2, 3, 4, 5, 5, 6, 6, 7])
// set([1, 1, 2, 2, 2])
// set(['A', 'A', 'A', 'A'])
// set(['A', 'B', 'C', 'D'])

// function numLayers(n) {
// 	width = (Math.PI*n*Math.pow(2, (3*(n-1))/2))/1000
// 	console.log(width)
// }

// const rnd = n => n > 1e16 ? n.toExponential() :
// 	(Number.isInteger(n) && !(''+n).includes('+')) ? n+'.0' : n;
// const numLayers = n => rnd(2**n / 2000) + 'm';

// function numLayers(n) {
// 	width = Math.pow(2, n)*.0005
// 	console.log(width)
// }

// numLayers(0)
// numLayers(1)
// numLayers(2)
// numLayers(3)
// numLayers(93)
// numLayers(94)
// numLayers(95)
// numLayers(96)
// numLayers(97)
// numLayers(98)
// numLayers(99)
// numLayers(100)

// function century(year) {
// 	let adjYear = year*0.01
// 	let century = Math.floor(adjYear)
// 	if (Math.ceil(adjYear) === adjYear) {
// 		console.log(`${century}th century`)
// 	} else {
// 		console.log("adjYear", adjYear)
// 		console.log(century)
// 		console.log(`${++century}th century`)
// 	}
// }

// century(1756)
// century(1555)
// century(1000)
// century(1001)
// century(2005)
// century(1789)
// century(1510)
// century(1615)
// century(2000)
// century(1997)

// function hasValidPrice(product) {
// 	if (product && product.price && product.price >= 0 && typeof(product.price) === "number") {
// 		console.log(typeof(product.price))
// 		return true
// 	} else {
// 		if (String(product.price) === "0") {
// 			return true
// 		} else {
// 			return false
// 		}
// 	}
// }

// hasValidPrice({ "product": "Milk", price: 1.50 })
// hasValidPrice({ "product": "Cheese", price: -1 })
// hasValidPrice({ "product": "Eggs", price: 0 })
// hasValidPrice({ "product": "Flour" })
// hasValidPrice({ "product": "Cerials", price: '3.0' })
// hasValidPrice({ "product": "Beer", price: NaN })
// hasValidPrice()

// function constructFence(price) {
// 	let singleNum = price.replace(/,/gi, "")
// 	let integer = (1000000/(parseInt(singleNum.replace(price[0], ""))))
// 	const H = "H"
// 	let fence = H.repeat(Math.floor(integer));
// 	console.log("int", integer);
// 	console.log(fence);
// }

// constructFence('$50,000')
// constructFence('$100,000')
// constructFence('$1,000,000')
// constructFence('$500,000')
// constructFence('$20,000')
// constructFence('$10,000')
// constructFence('$5000')
// constructFence('$1000')

// function indexMultiplier(arr) {
// 	if (arr.length) {
// 		let count = 0
// 		let newArray = arr.map(num => num*count++)
// 		console.log(newArray)
// 		let sum = newArray.reduce(function (accumulator, currentValue) {
// 			return accumulator + currentValue
// 		  }, 0)
// 		console.log(sum)
// 	} else {
// 		return 0
// 	}	
// }

// indexMultiplier([9, 3, 7, -7])
// indexMultiplier([3, 8, 6, -4])
// indexMultiplier([10, -9, -2, 0, 2])
// indexMultiplier([4, 4, 2, 2, -4])
// indexMultiplier([9, 4, 7, 5, -1, -3])
// indexMultiplier([-9, 5, 9, 5, -7, 7])
// indexMultiplier([-1, -2, 8, -5])
// indexMultiplier([7, 10, -5, -4, 6, 2])
// indexMultiplier([0, 1, 0, 1, 0, 1, 0, 1])
// indexMultiplier([-2, 5, -7, -23, 0, 14])
// indexMultiplier([53, -43, 39, -2, -11, 3])
// indexMultiplier([40, 32, -18, 48, -15])
// indexMultiplier([1, -20, -11, 4, -12, 38, -30, 34])
// indexMultiplier([-21, 30, 20, 6, -16])
// indexMultiplier([8, -24, -8, -23, 20, 32, -29, -20])
// indexMultiplier([])

// function getDistance(a, b) {
// 	const calc = Math.sqrt(Math.pow((a.x-b.x), 2)+Math.pow((a.y-b.y), 2)).toFixed(3)
// 	const answer = Number(calc)
// 	console.log(answer)
// }

// getDistance({x: -2, y: 1}, {x: 4, y: 3})
// getDistance({x: 0, y: 0}, {x: 1, y: 1})
// getDistance({x: 10, y: -5}, {x: 8, y: 16})
// getDistance({x: 4, y: 3}, {x: 3, y: -2})
// getDistance({x: -1, y: -1}, {x: 10, y: 10})
// getDistance({x: 100, y: 100}, {x: 100, y: 100})
// getDistance({x: 14239, y: -11222}, {x: -12301, y: 12888})

// function countTowers(towers) {
// 	let base = towers[towers.length-1]
// 	if(base[0]) {
// 		const regex = /#/g;
// 		const found = base[0].match(regex);
// 		console.log(found.length/2)
// 	} else {
// 		return 0
// 	}
	
// }

// countTowers([
// 	["     ##          "],
// 	["##   ##        ##"],
// 	["##   ##   ##   ##"],
// 	["##   ##   ##   ##"]
// ])

// countTowers([
// 	["                         ##"],
// 	["##             ##   ##   ##"],
// 	["##        ##   ##   ##   ##"],
// 	["##   ##   ##   ##   ##   ##"]
// ])

// countTowers([
// 	["##"],
// 	["##"]
// ])

// countTowers([
// 	[""]
// ])

// countTowers([
// 	["                                              "],
// 	["##   ##   ##   ##   ##   ##   ##   ##   ##   ##"],
// 	["##   ##   ##   ##   ##   ##   ##   ##   ##   ##"],
// 	["##   ##   ##   ##   ##   ##   ##   ##   ##   ##"]
// ])
// countTowers([
// 	["##   ##          "],
// 	["##   ##          "],
// 	["##   ##   ##   ##"],
// 	["##   ##   ##   ##"]
// ])

// function hasHiddenFee(prices, t) {
// 	let signs = prices.map(number => {
// 		return parseInt(number.slice(1))
// 	})
// 	// console.log(signs)
// 	let sum = (signs.reduce((accumulator, currentValue) => accumulator + currentValue));
// 	console.log(sum)
// 	let totalnumber = parseInt(t.slice(1))
// 	if (sum === totalnumber) {
// 		return false
// 	} else {
// 		return true
// 	}
// }

// hasHiddenFee(["$2", "$4", "$1", "$8"], "$15")
// hasHiddenFee(["$1", "$2", "$3"], "$6")
// hasHiddenFee(["$1"], "$4")
// hasHiddenFee(["$15", "$40", "$19", "$50", "$22", "$41", "$35", "$10", "$38", "$41"], "$311")
// hasHiddenFee(["$25", "$6", "$19", "$9", "$32", "$15", "$10", "$9", "$7", "$8", "$37", "$23", "$18"], "$232")
// hasHiddenFee(["$31", "$30", "$21", "$12", "$10", "$38", "$42", "$27", "$51"], "$297")
// hasHiddenFee(["$9", "$37", "$21", "$4", "$14", "$10", "$36", "$33", "$17", "$41", "$50", "$48", "$2", "$45", "$6", "$22", "$23"], "$499")
// hasHiddenFee(["$44"], "$82")
// hasHiddenFee(["$15", "$30", "$34"], "$79")
// hasHiddenFee(["$35", "$29", "$9", "$47", "$43", "$4", "$37", "$32", "$49", "$37", "$32", "$38", "$43", "$19", "$26", "$46", "$46", "$31", "$24", "$6"], "$696")
// hasHiddenFee(["$50", "$28", "$11", "$51", "$8", "$44"], "$192")
// hasHiddenFee(["$50", "$14", "$45", "$43", "$7", "$45", "$34", "$28", "$46", "$50", "$36", "$23"], "$432")

// function sweetestIcecream(arr) {
// 	const flavors = {
//         'Plain': 0,
//         'Vanilla':5,
//         'ChocolateChip':5,
//         'Strawberry':10,
//         'Chocolate':10
//     }

//     let newArr = arr.map(iceCream => {
//         return (flavors[iceCream.flavor] + iceCream.numSprinkles)
//     })

//     console.log(Math.max(...newArr))
// }

// class IceCream {
// 	constructor(flavor, numSprinkles) {
// 		this.flavor = flavor
// 		this.numSprinkles = numSprinkles
// 	}
// }

// ice1 = new IceCream("Chocolate", 13)
// ice2 = new IceCream("Vanilla", 0)
// ice3 = new IceCream("Strawberry", 7)
// ice4 = new IceCream("Plain", 18)
// ice5 = new IceCream("ChocolateChip", 3)
// ice6 = new IceCream("Chocolate", 23)
// ice7 = new IceCream("Strawberry", 0)
// ice8 = new IceCream("Plain", 34)
// ice9 = new IceCream("Plain", 81)
// ice10 = new IceCream("Vanilla", 12)

// sweetestIcecream([ice1, ice2, ice3, ice4, ice5])
// sweetestIcecream([ice7, ice10, ice1, ice6, ice8, ice10, ice2, ice2])
// sweetestIcecream([ice10, ice10, ice6, ice8, ice4])
// sweetestIcecream([ice2, ice10, ice6, ice9, ice7])
// sweetestIcecream([ice10, ice6, ice4, ice1, ice7, ice8, ice6])
// sweetestIcecream([ice3, ice1])
// sweetestIcecream([ice6, ice7, ice5, ice4, ice3])
// sweetestIcecream([ice4, ice8, ice9])
// sweetestIcecream([ice5, ice7])
// sweetestIcecream([ice5, ice3, ice6, ice2, ice7, ice2, ice7, ice2])
// sweetestIcecream([ice1, ice9, ice10, ice9, ice7, ice1, ice9])
// sweetestIcecream([ice1, ice4])
// sweetestIcecream([ice7, ice4])

// Fix this incorrect code so that all tests pass!

// function flatten(arr) {
//     return ([].concat(...arr))
//   }

// flatten([[1, 2], [3, 4]])
// flatten([['a', 'b'], ['c', 'd']])
// flatten([[true, false], [false, false]])

// function getBirthdayCake(name, age) {
//   let message = `# ${age} Happy Birthday ${name}! ${age} #`
//   if (age%2 === 0) {
//     let hashes = "#".repeat(message.length)
//     let birthDayMessage = [hashes, message, hashes]
//     return birthDayMessage
//   } else {
//     let hashes = "#".repeat(message.length)
//     let birthDayMessage = [hashes, message, hashes]
//     return birthDayMessage
//   }
// }

// getBirthdayCake("Princess", 40)
// getBirthdayCake("Maxwell", 85)
// getBirthdayCake("Zenobia", 63)
// getBirthdayCake("Adrian", 91)

// function testJackpot(result) {
//   let test = result[0]
//   console.log(test)
//   console.log(result.every(test))
// 	// if (result.every(test)){
//   //   console.log("true")
//   // } else {
//   //   console.log("false")
//   // }
// }

// testJackpot(['@', '@', '@', '@'])
// testJackpot(['!', '!', '!', '!'])
// testJackpot(['abc', 'abc', 'abc', 'abc'])
// testJackpot(['karaoke', 'karaoke', 'karaoke', 'karaoke'])
// testJackpot(['SS', 'SS', 'SS', 'SS'])
// testJackpot([':(', ':)', ':|', ':|'])
// testJackpot(['&&', '&', '&&&', '&&&&'])
// testJackpot(['hee', 'heh', 'heh', 'heh'])
// testJackpot(['SS', 'SS', 'SS', 'Ss'])
// testJackpot(['SS', 'SS', 'Ss', 'Ss'])

// function testJackpot(result) {
//   let test = result[0]
//   let newArray = result.filter(word => word === test)
//   // console.log(newArray)
//   if (newArray.length === 4) {
//     console.log("true")
//   } else {
//     console.log("false")
//   }
// }

// testJackpot(['@', '@', '@', '@'])
// testJackpot(['!', '!', '!', '!'])
// testJackpot(['abc', 'abc', 'abc', 'abc'])
// testJackpot(['karaoke', 'karaoke', 'karaoke', 'karaoke'])
// testJackpot(['SS', 'SS', 'SS', 'SS'])
// testJackpot([':(', ':)', ':|', ':|'])
// testJackpot(['&&', '&', '&&&', '&&&&'])
// testJackpot(['hee', 'heh', 'heh', 'heh'])
// testJackpot(['SS', 'SS', 'SS', 'Ss'])
// testJackpot(['SS', 'SS', 'Ss', 'Ss'])

function reverseArr(num) {
  let reverse = num.toString().split("").reverse();
	const final = reverse.map(number => parseInt(number))
  console.log(final);
}

reverseArr(1485979)
reverseArr(623478)
reverseArr(12345)
reverseArr(202069)