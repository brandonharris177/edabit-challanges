function changeEnough(change, amountDue) {
	money = []
	money.push(change[0] *.25)
	money.push(change[1] *.10)
	money.push(change[2] *.5)
	money.push(change[3] *.01)
	total = money.reduce((accumulator, currentValue) => accumulator + currentValue,
  0)
	if (total < amountDue) {
        console.log("false")
		return false
	} else {
        console.log(total)
        console.log("true")
		return true
	}
}

// changeEnough([1, 0, 5, 219], 19.99)

function retrieveMajor(semver) {
	const version = semver.split('.')
    console.log(version[0])
    return version[0]
}

function retrieveMinor(semver) {
	const version = semver.split('.')
    console.log(version[1])
    return version[1]
}

function retrievePatch(semver) {
	const version = semver.split('.')
    console.log(version[2])
    return version[2]
}


// retrieveMajor("6.1.9")
// retrieveMinor("6.1.9")
// retrievePatch("6.1.9")

// retrieveMajor("2.1.0")
// retrieveMinor("2.1.0")
// retrievePatch("2.1.0")

// retrieveMajor("5.12.13")
// retrieveMinor("5.12.13")
// retrievePatch("5.12.13")

function canCapture([yourRook, opponentsRook]) {
	if (yourRook.charAt(0) === opponentsRook.charAt(0) || yourRook.charAt(1) === opponentsRook.charAt(1)) {
		return true
	} else {
		return false
	}
}

// canCapture(['A8', 'E8'])
// canCapture(['A1', 'B2'])
// canCapture(['H4', 'H3'])
// canCapture(['F5', 'C8'])
// canCapture(['G3', 'G7'])
// canCapture(['B3', 'B2'])
// canCapture(['F5', 'B2'])
// canCapture(['H5', 'C8'])

function removeVowels(str) {
	var regex = /[aeiou]/gi;
	console.log(str.replace(regex, ''))
  return str.replace(regex, '')
}

// removeVowels('ben')
// removeVowels('many')
// removeVowels('candy')
// removeVowels('hello')
// removeVowels('apple')
// removeVowels('fever')

function netPresentValue(pv, ir, years) {
	if (Math.sign(pv) === -1 || Math.sign(ir) === -1 || Math.sign(years) === -1) {
		return false
	} else {
		const value = Math.round(pv *(1 - Math.pow((1 + ir), -years)) / ir)
		console.log(`$${value}`)
		return `$${value}`;
	}
}

// netPresentValue(100, 0.10, 1)
// netPresentValue(100, 0.2, 1)
// netPresentValue(100, 0.1, 20)
// netPresentValue(10000, 0.05, 20)
// netPresentValue(250, 0.01, 1)
// netPresentValue(250, 0.01, -1)
// netPresentValue(15, 0.50, 100)

function keysAndValues(obj) {
	console.log([Object.keys(obj), Object.values(obj)])
	return ([Object.keys(obj), Object.values(obj)])
}

// keysAndValues({a: 1, b: 2, c: 3})
// keysAndValues({a: "Apple", b: "Microsoft", c: "Google"})
// keysAndValues({key1: true, key2: false, key3: undefined})
// keysAndValues({1: null, 2: null, 3: null})
// keysAndValues({key1: "cat", key2: "dog", key3: null})


function solveForExp(a, b) {
	return Math.round(Math.log(b) / Math.log(a));
}

// solveForExp(4, 1024)
// solveForExp(2, 1024)
// solveForExp(9, 3486784401)
// solveForExp(4, 4294967296)
// solveForExp(8, 134217728)
// solveForExp(19, 47045881)
// solveForExp(10, 100000000)

function wordNest(word, nest) {
	console.log((nest.length / word.length)-1);
	return ((nest.length / word.length)-1);
}

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

function sevenBoom(arr) {
	const singleNum = arr.join('')
	if (/7/.test(singleNum)) {
			return "Boom!";
		} else {
			return "there is no 7 in the array";
		}
}

// sevenBoom([2, 6, 7, 9, 3])
// sevenBoom([33, 68, 400, 5])
// sevenBoom([86, 48, 100, 66])
// sevenBoom([76, 55, 44, 32])
// sevenBoom([35, 4, 9, 37])

function towerHanoi(discs) {
	return (Math.pow(2, discs) -1)
}

// towerHanoi(3)
// towerHanoi(5)
// towerHanoi(8)
// towerHanoi(19)
// towerHanoi(9)
// towerHanoi(13)
// towerHanoi(0)

function sumOfCubes(nums) {
	const newNums = nums.map(num => num ** 3)
	let sum = newNums.reduce(
  ( accumulator, currentValue ) => accumulator + currentValue,
  0)
	return sum
}

// sumOfCubes([1, 5, 9])
// sumOfCubes([3, 4, 5])
// sumOfCubes([1, 1, 1])
// sumOfCubes([2])
// sumOfCubes([5, 1, 2])
// sumOfCubes([32])
// sumOfCubes([5, 9, 4, 4, 9])
// sumOfCubes([0, 1, 2])
// sumOfCubes([])

function countVowels(str) {
	const vowels = /[a/e/i/o/u]/gi;
	const found = str.match(vowels);
	return found.length
}

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

function concat(...args) {
	array = [...args]
	return array.flat();
}

concat([1, 2, 3], [4, 5], [6, 7])
concat([1], [2], [3], [4], [5], [6], [7])
concat([1, 2], [3, 4])
concat([4, 4, 4, 4, 4])
concat(['a'], ['b', 'c'])

function filterArray(arr) {
	arr2 =[]
	arr.forEach(ele => {
		if (typeof(ele) === "number") {
			arr2.push(ele)
		} else {
			console.log(typeof(ele))
		}
	})
	return arr2
}

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

function triangle(n) {
	return(n*(n+1)/2)
}

// triangle(1)
// triangle(2)
// triangle(3) 
// triangle(8)
// triangle(2153)

function convertBinary(str) {
	var am = str.replace(/[a-m]/gi, '0')
	var nz = am.replace(/[n-z]/gi, '1')
	console.log(nz)
	return nz 
}

// convertBinary("house")
// convertBinary("excLAIM")
// convertBinary("moon")
// convertBinary("MOOn")
// convertBinary("topsyTurvy")

function doubleChar(str) {
	let split = str.split('')
	let repeat = split.map(char => {
		return char.repeat(2)
	})
	join = repeat.join("")
	return(join)
}

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

function getBudgets(arr) {
	let budgets = arr.map(person => {
		return person.budget
	});
	const reducer = (accumulator, currentValue) => accumulator + currentValue;

	console.log(budgets.reduce(reducer));
}

getBudgets([{name: "John",  age: 21, budget: 23000}, {name: "Steve",  age: 32, budget: 40000}, {name: "Martin",  age: 16, budget: 2700}])
getBudgets([{name: "John",  age: 21, budget: 29000}, {name: "Steve",  age: 32, budget: 32000}, {name: "Martin",  age: 16, budget: 1600}])
getBudgets([{name: "John",  age: 21, budget: 19401}, {name: "Steve",  age: 32, budget: 12321}, {name: "Martin",  age: 16, budget: 1204}])
getBudgets([{name: "John",  age: 21, budget: 10234}, {name: "Steve",  age: 32, budget: 21754}, {name: "Martin",  age: 16, budget: 4935}])

function myPi(n) {
	return  (Number.parseFloat(Math.PI).toFixed(n))
}

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

function charIndex(word, char) {
	arr = []
	if (word.includes(char)) {
		arr.push(word.indexOf(char))
		arr.push(word.lastIndexOf(char))
		console.log(arr)
		return arr
	} else {
		return undefined
	}
}

// charIndex('hello', 'l')
// charIndex('circumlocution', 'r')
// charIndex('circumlocution', 'i')
// charIndex('circumlocution', 'c')
// charIndex('happy', 'h')
// charIndex('happy', 'p')
// charIndex('happy', 'e')

function societyName(friends) {
	const secretSociety = friends.map((friend) => friend[0])
	.sort()
	.join('')
	return secretSociety
}

// societyName(['Adam', 'Sarah', 'Malcolm'])
// societyName(['Phoebe', 'Chandler', 'Rachel', 'Ross', 'Monica', 'Joey'])
// societyName(['Harry', 'Newt', 'Luna', 'Cho'])
// societyName(['Sherlock', 'Irene', 'John'])
// societyName(['Sheldon', 'Amy', 'Penny', 'Howard', 'Raj'])

function set(arr) {
	newArr = []
	arr.map(char => {
		if (newArr.indexOf(char) === -1) {	
			newArr.push(char)
		} 
	})
	console.log(newArr)
}

// set([1, 3, 3, 5, 5])
// set([4, 4, 4, 4])
// set([5, 7, 8, 9, 10, 15])
// set([5, 9, 9])
// set([1, 2, 3, 4, 5, 5, 6, 6, 7])
// set([1, 1, 2, 2, 2])
// set(['A', 'A', 'A', 'A'])
// set(['A', 'B', 'C', 'D'])

function numLayers(n) {
	width = (Math.PI*n*Math.pow(2, (3*(n-1))/2))/1000
	console.log(width)
}

const rnd = n => n > 1e16 ? n.toExponential() :
	(Number.isInteger(n) && !(''+n).includes('+')) ? n+'.0' : n;
const numLayers = n => rnd(2**n / 2000) + 'm';

function numLayers(n) {
	width = Math.pow(2, n)*.0005
	console.log(width)
}

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

function century(year) {
	let adjYear = year*0.01
	let century = Math.floor(adjYear)
	if (Math.ceil(adjYear) === adjYear) {
		console.log(`${century}th century`)
	} else {
		console.log("adjYear", adjYear)
		console.log(century)
		console.log(`${++century}th century`)
	}
}

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

function hasValidPrice(product) {
	if (product && product.price && product.price >= 0 && typeof(product.price) === "number") {
		console.log(typeof(product.price))
		return true
	} else {
		if (String(product.price) === "0") {
			return true
		} else {
			return false
		}
	}
}

// hasValidPrice({ "product": "Milk", price: 1.50 })
// hasValidPrice({ "product": "Cheese", price: -1 })
// hasValidPrice({ "product": "Eggs", price: 0 })
// hasValidPrice({ "product": "Flour" })
// hasValidPrice({ "product": "Cerials", price: '3.0' })
// hasValidPrice({ "product": "Beer", price: NaN })
// hasValidPrice()

function constructFence(price) {
	let singleNum = price.replace(/,/gi, "")
	let integer = (1000000/(parseInt(singleNum.replace(price[0], ""))))
	const H = "H"
	let fence = H.repeat(Math.floor(integer));
	console.log("int", integer);
	console.log(fence);
}

// constructFence('$50,000')
// constructFence('$100,000')
// constructFence('$1,000,000')
// constructFence('$500,000')
// constructFence('$20,000')
// constructFence('$10,000')
// constructFence('$5000')
// constructFence('$1000')

function indexMultiplier(arr) {
	if (arr.length) {
		let count = 0
		let newArray = arr.map(num => num*count++)
		console.log(newArray)
		let sum = newArray.reduce(function (accumulator, currentValue) {
			return accumulator + currentValue
		  }, 0)
		console.log(sum)
	} else {
		return 0
	}	
}

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

function getDistance(a, b) {
	const calc = Math.sqrt(Math.pow((a.x-b.x), 2)+Math.pow((a.y-b.y), 2)).toFixed(3)
	const answer = Number(calc)
	console.log(answer)
}

// getDistance({x: -2, y: 1}, {x: 4, y: 3})
// getDistance({x: 0, y: 0}, {x: 1, y: 1})
// getDistance({x: 10, y: -5}, {x: 8, y: 16})
// getDistance({x: 4, y: 3}, {x: 3, y: -2})
// getDistance({x: -1, y: -1}, {x: 10, y: 10})
// getDistance({x: 100, y: 100}, {x: 100, y: 100})
// getDistance({x: 14239, y: -11222}, {x: -12301, y: 12888})

function countTowers(towers) {
	let base = towers[towers.length-1]
	if(base[0]) {
		const regex = /#/g;
		const found = base[0].match(regex);
		console.log(found.length/2)
	} else {
		return 0
	}
	
}

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

function hasHiddenFee(prices, t) {
	let signs = prices.map(number => {
		return parseInt(number.slice(1))
	})
	// console.log(signs)
	let sum = (signs.reduce((accumulator, currentValue) => accumulator + currentValue));
	console.log(sum)
	let totalnumber = parseInt(t.slice(1))
	if (sum === totalnumber) {
		return false
	} else {
		return true
	}
}

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

function sweetestIcecream(arr) {
	const flavors = {
        'Plain': 0,
        'Vanilla':5,
        'ChocolateChip':5,
        'Strawberry':10,
        'Chocolate':10
    }

    let newArr = arr.map(iceCream => {
        return (flavors[iceCream.flavor] + iceCream.numSprinkles)
    })

    console.log(Math.max(...newArr))
}

class IceCream {
	constructor(flavor, numSprinkles) {
		this.flavor = flavor
		this.numSprinkles = numSprinkles
	}
}

ice1 = new IceCream("Chocolate", 13)
ice2 = new IceCream("Vanilla", 0)
ice3 = new IceCream("Strawberry", 7)
ice4 = new IceCream("Plain", 18)
ice5 = new IceCream("ChocolateChip", 3)
ice6 = new IceCream("Chocolate", 23)
ice7 = new IceCream("Strawberry", 0)
ice8 = new IceCream("Plain", 34)
ice9 = new IceCream("Plain", 81)
ice10 = new IceCream("Vanilla", 12)

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

function flatten(arr) {
    return ([].concat(...arr))
  }

flatten([[1, 2], [3, 4]])
flatten([['a', 'b'], ['c', 'd']])
flatten([[true, false], [false, false]])

function getBirthdayCake(name, age) {
  let message = `# ${age} Happy Birthday ${name}! ${age} #`
  if (age%2 === 0) {
    let hashes = "#".repeat(message.length)
    let birthDayMessage = [hashes, message, hashes]
    return birthDayMessage
  } else {
    let hashes = "#".repeat(message.length)
    let birthDayMessage = [hashes, message, hashes]
    return birthDayMessage
  }
}

// getBirthdayCake("Princess", 40)
// getBirthdayCake("Maxwell", 85)
// getBirthdayCake("Zenobia", 63)
// getBirthdayCake("Adrian", 91)

function testJackpot(result) {
  let test = result[0]
  console.log(test)
  console.log(result.every(test))
	// if (result.every(test)){
  //   console.log("true")
  // } else {
  //   console.log("false")
  // }
}

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

function testJackpot(result) {
  let test = result[0]
  let newArray = result.filter(word => word === test)
  // console.log(newArray)
  if (newArray.length === 4) {
    console.log("true")
  } else {
    console.log("false")
  }
}

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

// reverseArr(1485979)
// reverseArr(623478)
// reverseArr(12345)
// reverseArr(202069)

function indexShuffle(str) {
  let split = str.split("")
  split.indexOf(i/2)
};

// indexShuffle("abcdef")
// indexShuffle("abababab")
// indexShuffle("it was a beautiful day")
// indexShuffle("maybe")
// indexShuffle("holiday")

function boxSeq(step) {
	if (step%2 === 0) {
    console.log(step)
  } else {
    console.log(step+2)
  }
}

// boxSeq(5)
// boxSeq(0)
// boxSeq(6)
// boxSeq(99)
// boxSeq(2)
// boxSeq(1)

class Circle {
    constructor(radius){
      this.radius = radius;
    }
    getArea(){return(Math.PI*(this.radius**2))};
    getPerimeter(){return(2*Math.PI*this.radius)};
  }

  function round(number) {
    var factor = Math.pow(10, 5);
    return Math.round(number * factor) / factor;
  }
  let circo = new Circle(20);
    circo.getArea()
    circo.getPerimeter()
  let circo1 = new Circle(2);
    circo1.getArea()
    circo1.getPerimeter()
  let circo2 = new Circle(4.4);
    circo2.getArea()
    circo2.getPerimeter()

function removeLeadingTrailing(n) {
  number = Number.parseFloat(n, 10).toString();
  console.log(number)
}

// removeLeadingTrailing("230.000")
// removeLeadingTrailing("00402")
// removeLeadingTrailing("03.1400")
// removeLeadingTrailing("30")
// removeLeadingTrailing("30.0000")
// removeLeadingTrailing("24340")
// removeLeadingTrailing("0404040")
// removeLeadingTrailing("0")
// removeLeadingTrailing("00")
// removeLeadingTrailing("0.000000")
// removeLeadingTrailing("0000.000")
// removeLeadingTrailing("00.0001")
// removeLeadingTrailing("10000")
// removeLeadingTrailing("1345")
// removeLeadingTrailing("30.000020")
// removeLeadingTrailing("00200.1900001")

function reverseAndNot(num) {
  let array = []
  const reverseNum = 
    num
      .toString()
      .split('')
      .reverse()
      .join('')
  const numString = 
    num
      .toString()
  array.push(reverseNum)
  array.push(numString)
  console.log(parseFloat(array.join("")))
}

// reverseAndNot(123)
// reverseAndNot(123456789)

function noddyFunction(str) {
  const regex = /d/i
  if(regex.test(str)) {
    return false
  } else {
    return true
  }}

// noddyFunction("fantastic")
// noddyFunction("waterfall")
// noddyFunction("nature")
// noddyFunction("Benevolent")
// noddyFunction("courageous")
// noddyFunction("virtue")
// noddyFunction("CREATURE")
// noddyFunction("Planet")
// noddyFunction("possibility")
// noddyFunction("Inspiration")
// noddyFunction("Hope")
// noddyFunction("nurture")

// noddyFunction("disaster")
// noddyFunction("wonderful")
// noddyFunction("noddy")
// noddyFunction("blessed")
// noddyFunction("Wonder")
// noddyFunction("ADVENTUROUS")
// noddyFunction("End")
// noddyFunction("Kindness")
// noddyFunction("UNDERSTANDING")
// noddyFunction("Edabit")

function pingPong(arr, win) {
  const pongs = 'Ping!,Pong!,';
  arr2 = pongs.repeat(arr.length).split(',')
    if (win === true) {
      arr2.pop()
      console.log(arr2)
    } else {
      arr2.pop()
      arr2.pop()
      console.log(arr2)
    }
}

// pingPong(["Ping!", "Ping!", "Ping!"], true)
// pingPong(["Ping!", "Ping!"], false)
// pingPong(["Ping!"], true)

function catchZeroDivision(expr) { 
	console.log (isFinite(eval(expr)))
}

// catchZeroDivision("2 / 0")
// catchZeroDivision("4 / (2 + 3 - 5)")
// catchZeroDivision("2 * 5 - 3")
// catchZeroDivision("3 / 0")
// catchZeroDivision("23 - 23 / 23")
// catchZeroDivision("0 + 1 + 2 + 3 + 0")
// catchZeroDivision("0+0+0+0+0+0+0")
// catchZeroDivision("0-0-0-0-0-0-0-0-0-0")
// catchZeroDivision("4 / 3")
// catchZeroDivision("5343456787543234567 / 743044830483009043909003")
// catchZeroDivision("0 / 0")
// catchZeroDivision("(-100 + 50 + 50) / (60 - 50 - 10)")
// catchZeroDivision("0 + 0 + (3 / (3 - 3))")
// catchZeroDivision("7 / ((7**2) - ((-7)**2))")

function catchZeroDivision(expr) { 
  if (isFinite(eval(expr))) {
    return false
  } else {
    return true
  }
}

const vreplace = function(sentance, vowel) {
	const regex = /a|e|i|o|u/gi;
  console.log(sentance.replace(regex, vowel));
}

vreplace("apples and bananas", "u")
vreplace("cheese casserole", "o")

const vreplace = function(sentance, vowel) {
	const regex = /a|e|i|o|u/gi;
  console.log(sentance.replace(regex, vowel));
}

let Test1 = "apples and bananas".vreplace("u")
console.log(Test1)
let Test2 = "stuffed jalapeno poppers".vreplace("e")
let Test3 = "shrimp tempura".vreplace("a")
let Test4 = "tuna sashimi".vreplace("i")
let Test5 = "chocolate cake".vreplace("a")

function checkEquals(arr1, arr2) {
  if (arr1.toString() === arr2.toString()) {
    console.log(true)
    return true
   } else {
    console.log(false)
    return false
   }
  }

// checkEquals([1, 2], [1, 3])
// checkEquals([1, 2], [1, 2])
// checkEquals([4, 5, 6], [4, 5, 6])
// checkEquals([4, 7, 6], [4, 5, 6])

function testJackpot(result) {
  let newArray = result.filter(character => character === result[0])
  if (newArray.length === 4) {
    console.log(newArray)
  } else {
    return false
  }
}

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

function getDecimalPlaces(num) {
  const afterDecimal = (num.split('.'))
  if (afterDecimal[1]) {
    console.log(afterDecimal[1].length)
  } else {
    console.log(0)
  }
}

// getDecimalPlaces("3.22")
// getDecimalPlaces("400")
// getDecimalPlaces("43.50")
// getDecimalPlaces("100,000,000")
// getDecimalPlaces("3.1415")
// getDecimalPlaces("0")
// getDecimalPlaces("01")
// getDecimalPlaces("00010.00010")
// getDecimalPlaces("3,141.592")

function formatMath(expr) {
  var expr2 = expr.replace("x", "*");
  answer = eval(expr2)
  console.log(`${expr} = ${answer}`)
}

// formatMath("3 + 4")
// formatMath("3 - 2")
// formatMath("4 x 5")
// formatMath("6 / 3")

function returnEndOfNumber(num) {
  lastDigit = num % 10;
  if (lastDigit === 1){
    console.log(`${num.toString()}-ST`);
  } else if (lastDigit === 2) {
    console.log(`${num.toString()}-ND`);
  } else if(lastDigit === 3) {
    console.log(`${num.toString()}-RD`);
  } else {
    console.log(`${num.toString()}-TH`);
  }
}

// returnEndOfNumber(334)
// returnEndOfNumber(12341)
// returnEndOfNumber(1)
// returnEndOfNumber(3222)
// returnEndOfNumber(563)

function countOnes(i) {
  // console.log(typeof i, "number")
  // let int = parseInt(i)
  // console.log(typeof int, "intiger")
  if (i === 0) { 
    let bianary = (i >>> 0).toString(2);
    console.log(bianary)
  } else {
    console.log(0)
  }
}
	

// countOnes(12)
// countOnes(0)
// countOnes(100)
// countOnes(101)
// countOnes(999)
// countOnes(1e9)
// countOnes(123456789)
// countOnes(1234567890)

function progressDays(runs) {
  let total = []
  let count = 0
  innerProgressDays()
  function innerProgressDays() {
    if (runs[count] < runs[count+1]) {
      total.push(1)
      if (count < runs.length) {
        count++
        innerProgressDays()
      } else {
        return(total.length)
      };
    } else {
      if (count < runs.length) {
        count++
        innerProgressDays()
      } else {
        return(total.length)
      };
    };
  };
  console.log(total.length)
};

// progressDays([3, 4, 1, 2])
// progressDays([10, 11, 12, 9, 10])
// progressDays([6, 5, 4, 3, 2, 9])
// progressDays([9, 9])
// progressDays([12, 11, 10, 12, 11, 13])

function getDay(day) {
  let date = new Date(day).toString().split(" ")

    if (date[0] === "Sun"){
      return "Sunday"
    } else if (date[0] === "Mon") {
      return "Monday"
    } else if (date[0] === "Tue") {
      return "Tuesday"
    } else if (date[0] === "Wed") {
      return "Wednesday"
    } else if (date[0] === "Thu") {
      return "Thursday"
    } else if (date[0] === "Fri") {
      return "Friday"
    } else if (date[0] === "Sat") {
      return "Saturday"
    }
}

// getDay('12/07/2016')
// getDay('12/08/2011')
// getDay('09/04/2016')
// getDay('06/08/2012')
// getDay('08/13/2019')

function isSlidey(n) {
  let string = n.toString()
  let count = 0
  if (string.length === 1) {
    console.log("false")
  } else {
    innerCheck(count)
  }
  function innerCheck(count) {
    let original = Number.parseInt(string[count], 10);
    let oneMore = Number.parseInt(string[count+1], 10)+1;
    let oneLess = Number.parseInt(string[count+1], 10)-1;
    if (count+1 === string.length) {
      console.log("true")
    } else if (original === oneMore || original === oneLess) {
      count++
      innerCheck(count)
    } else {
      console.log('false')
    }
  }
}

// isSlidey(123454321)
// isSlidey(54345)
// isSlidey(987654321)
// isSlidey(1123)
// isSlidey(1357)
// isSlidey(1)
// isSlidey(0)
// isSlidey(13578987)
// isSlidey(232323232)
// isSlidey(2323232322)
// isSlidey(2343456567878)
// isSlidey(999999999999)
// isSlidey(223322332233)
// isSlidey(7766554433)
// isSlidey(32)
// isSlidey(21)
// isSlidey(33)
// isSlidey(30)

function filterUnique(arr) {
  let count = 0
  let newArray =[]
  innerFilter(count)
  function innerFilter(count) {
    if (count === arr.length) {
      console.log(`one time ${newArray}`)
    } else {
      let innerCount = 0
      innerFilter2(arr[count], innerCount)
      count++
      innerFilter(count)
    }
    console.log(newArray)
  }

  function innerFilter2(innerString, innerCount) {
    // console.log(innerCount)
    let innerArray = innerString.split("")
    if (innerCount+1 === innerString.length) {
      // console.log("return unique")
      newArray.push(innerString)
      // console.log(newArray)
    } else {
      // console.log("numbers", innerCount+1, innerString.length)
      // console.log(innerArray)
      let result = innerArray.filter(character => character === innerArray[innerCount])
      if (result.length > 1) {
        // console.log("match found")
      } else {
        innerCount++
        innerFilter2(innerString, innerCount)
      }
    }
  }
}

// filterUnique(['abc', 'abcdb', 'aea', 'bbb'])
// filterUnique(['88', '999', '989', '9988', '9898'])
// filterUnique(['ABCDE', 'DDEB', 'BED', 'CCA', 'BAC'])
// filterUnique(['qrrs', 'srrq', 'qqrs', 'qq', 'ss', 'rs'])
// filterUnique(['abab', 'ba', 'ab', 'cc'])

function rev(n) {
  let absNum = Math.abs(n).toString().split("").reverse().join(",")
  console.log(absNum)
}

// rev(215)
// rev(122225)
// rev(215)
// rev(-215)
// rev(-2152)
// rev(-122157)
// rev(666)
// rev(999)

function howManySeconds(hours) {
	return(hours*3600);
}

function getEquivalent(note) {
	let chars = ["A", "B", "C", "D", "E", "F", "G"]
	let count = 0
	let Equivalent = ""
	if (note[1] === "b") {
		innerGetEquivalent(count, note, Equivalent)
		function innerGetEquivalent(count, note, Equivalent) {
			if (note[0] === "A"){
				Equivalent = "G#"
				console.log(Equivalent)
				return Equivalent
			} else {
				if (note[0] === chars[count]) {
					Equivalent = `${chars[--count]}#`
					console.log(Equivalent)
					return Equivalent
				} else {
					count++
					innerGetEquivalent(count, note)
				}
			}
			return Equivalent
		}
	} else {
		innerGetEquivalent(count, note, Equivalent)
		function innerGetEquivalent(count, note, Equivalent) {
			if (note[0] === "G"){
				Equivalent = "Ab"
				console.log(Equivalent)
				return Equivalent
			} else {
				if (note[0] === chars[count]) {
					Equivalent = `${chars[++count]}b`
					console.log(Equivalent)
					return Equivalent
				} else {
					count++
					innerGetEquivalent(count, note, Equivalent)
				}
			}
			return Equivalent
		}
	}
	setTimeout(function(){ console.log(Equivalent) }, 3000);
}

// getEquivalent("C#")
// getEquivalent("Db")
// getEquivalent("D#") 
// getEquivalent("Eb") 
// getEquivalent("F#") 
// getEquivalent("Gb") 
// getEquivalent("G#") //AB
// getEquivalent("Ab") //G#
// getEquivalent("A#")
// getEquivalent("Bb")


function addUp(num) {
	let sum = 0
	for (var i = 1; i < num; i++) {
		sum = (sum += i)
		console.log(sum)
	}
	return sum
}

function isSastry(number) {
	let stringNumber= number.toString(10);
	let successor= (number+1).toString(10);
	let concatination=parseInt(stringNumber.concat(successor));

	if(Math.sqrt(concatination)%1 === 0){
		return true
	} else {
		return false
	}
}

function countTrue(arr) {
	stringArray = []

	arr.forEach(value => {
		const newValue = new Boolean(value);
		value = newValue.toString();
		stringArray.push(value)
	})

	 let trueArray = stringArray.filter(value => value === "true")
	 return (trueArray.length)
}

// countTrue([true, false, false, true, false])
// countTrue([false, false, false, false])
// countTrue([])
// countTrue([false, false, true, true, false, false, false, true, true, true, true, false, true, true, false])
// countTrue([true, false, true, true, false, false, false, false, false])
// countTrue([false, true, true, false, true, true, false, true, false, true, false, true, false, true, false])
// countTrue([true, false, true, true, true, false, true, true, false, false])
// countTrue([false, false, false, false, true, false, true, false, true, false, false])
// countTrue([true, false, false, false, true, false, false, true, false, false, false])
// countTrue([true, true, false, true, false, false, false, false, true, false])
// countTrue([true, false, true, true, false, true, true, true, true, false, true, false, true, false])
// countTrue([true, false, true, true, true, true, false, true, true, false, true, false, false, false, false])
// countTrue([true, true, false, false, false, false, true, false, true, true, false, true])

function Book(title, author) {
	// Write your properties and methods here
    this.title = title;
    this.author = author;
	
	this.getTitle = function() {
		return(`Title: ${this.title}`)
    };
    
	this.getAuthor = function () {
		return(`Author: ${this.author}`)
    };
}

// Instantiate your Book constructor here

const PP = new Book("Pride and Prejudice", "Jane Austen")
const H = new Book("Hamlet", "William Shakespeare")
const WP = new Book("War and Peace", "Leo Tolstoy")

console.log(PP.title)
console.log(PP.author)
console.log(PP.getTitle(), 'Title: Pride and Prejudice')
console.log(PP.getAuthor(), 'Author: Jane Austen')

function oddishOrEvenish(num) {
    const array = num.toString().split("")
    const numArray = array.map((string) => {
        return parseInt(string, 10);
    })
    const sum = numArray.reduce(function(x, y) {
        return(x + y)
    }, 0);
    if (sum%2 === 0) {
        return "Evenish"
    } else {
        return "Oddish"
    } 
}

oddishOrEvenish(123)

function aveSpd(upTime, upSpd, downSpd) {
    const distance = upSpd * (upTime/60)  
    const downTime = (distance * 60)/downSpd
	const totalDist = distance*2
    const totalTime = upTime + downTime
	const final = totalDist/(totalTime/60)
	return final
}

// aveSpd(60, 5, 10)
// aveSpd(18, 10, 30)
// aveSpd(18, 20, 60)
// aveSpd(30, 10, 30)
// aveSpd(30, 8, 24)

function trace(arr) {
	let sum = 0
	var i;
	for (i = 0; i < arr.length; i++) {
		sum = sum + arr[i][i]
	}
	return sum
}

function factorial(int) {
	let product = 1
	while (int !== 0) {
		product = product * int
		int -= 1
	}
	return product
}

function neutralise(s1, s2) {
	let string = ""
	var i;
	for (i = 0; i < s1.length; i++) {
		if (s1[i] !== s2[i]) {
			string = string.concat(0)
		}
		else if (s1[i] === "+") {
			string = string.concat("+")
		}
		else if (s1[i] === "-") {
			string = string.concat("-")
		}
	}
	return string
}

function minSwaps(s1, s2) {
	var count = 0
	var i
	for (i=0; i < s1.length; i++) {
		if (s1[i] !== s2[i]) {
			count += 1
		}
	}
	return count/2
}

function getLength(arr) {
	if (arr.length === 0) {
		return 0
	}
	let count = 0
	while (arr.length > 0) {
		let last = arr.pop()
		if (typeof last === "object") {
			var i;
			for (i = 0; i < last.length; i++) {
				arr.push(last[i])
				} 
			}
		else {
				count += 1
        }
	}
	return count
}

// getLength([1, [2,3]])
// getLength([1, [2, [3, 4]]])
// getLength([1, [2, [3, [4, [5, 6]]]]])
// getLength([1, 7, 8])
// getLength([2])
// getLength([2, [3], 4, [7]])
// getLength([2, [3, [5, 7]], 4, [7]])
// getLength([2, [3, [4, [5]]], [9]])
// getLength([])

function numInStr(arr) {
	let numbers = []
	var i;
	for (i = 0; i < arr.length; i++) {
		let num = /[0-9]/.test(arr[i])
		if (num === true) {
			numbers.push(arr[i])
		}
	}
	return numbers
}

// numInStr(['abc', 'abc10'])
// numInStr(['abc', 'ab10c',  'a10bc', 'bcd'])
// numInStr(['1', 'a' , ' ' ,'b'])
// numInStr(['rct', 'ABC', 'Test', 'xYz'])
// numInStr(['this IS','10xYZ', 'xy2K77', 'Z1K2W0', 'xYz'])
// numInStr(['-/>', '10bc', 'abc '])

function countBoomerangs(arr) {
	let index = 0
	let count = 0
	while (index < arr.length-2) {
		if (arr[index] === arr[index+2] && arr[index] !== arr[index+1]) {
			count += 1
		}
		index += 1
	}
	return count
}

// countBoomerangs([9, 5, 9, 5, 1, 1, 1])
// countBoomerangs([5, 6, 6, 7, 6, 3, 9])
// countBoomerangs([4, 4, 4, 9, 9, 9, 9])
// countBoomerangs([5, 9, 5, 9, 5])
// countBoomerangs([4, 4, 4, 8, 4, 8, 4])
// countBoomerangs([2, 2, 2, 2, 2, 2, 3])
// countBoomerangs([2, 2, 2, 2, 3, 2, 3])
// countBoomerangs([1, 2, 1, 1, 1, 2, 1])
// countBoomerangs([5, 1, 1, 1, 1, 4, 1])
// countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2])
// countBoomerangs([1, 7, 1, 7, 1, 7, 1])
// countBoomerangs([5, 5, 5])

function intWithinBounds(n, lower, upper) {
	if (n >= lower & n < upper & Math.round(n) === n) {
		return true
	} else {
		return false
	}
}

function padMatrix(arr) {
	var i;
	for (i = 0; i < arr.length; i++) {
		arr[i].push(0)
		arr[i].unshift(0)
	}
	let border = []
	for (i = 0; i < arr[0].length; i++) {
		border.push(0)
	}
	arr.push(border)
	arr.unshift(border)
	return arr
}

(a,b,c) -- dimensions of the brick
(w,h) -- dimensions of the hole

function doesBrickFit(a,b,c, w,h) {
	let brick = [a, b, c]
	brick.sort()
	let minArea = brick[0] * brick[1]
	let hole = w * h
	if (minArea <= hole) {
		return true
	} else {
		return false
	}
}

function lcm(n1, n2) {
	let largestNum = n1
	let smallestNum = n2
	if (n2 > n1) {
		largestNum = n2
		smallestNum = n1
	}
	let LCM = largestNum
	while (LCM%smallestNum !== 0) {
		LCM = LCM + largestNum
	}
	return LCM
}

function primeFactorize(num) {
	let remainder = num
	let prime = 2
	let primes = []
	while (remainder >= prime) {
		prime = 2
		while (remainder%prime !== 0){
			prime += 1
		}
		primes.push(prime)
		remainder = remainder/prime
	}
	return primes
}

// primeFactorize(32)
// primeFactorize(17)
// primeFactorize(35)
// primeFactorize(2)
// primeFactorize(2)
// primeFactorize(1)
// primeFactorize(35)
// primeFactorize(2591)
// primeFactorize(2532)

function isPositiveDominant(a) {
	let positiveSet = new Set()
	let negativeSet = new Set()
	for (i = 0; i < a.length; i++) {
	 if (Math.sign(a[i]) === 1) {
		 positiveSet.add(a[i])
	 } else if (Math.sign(a[i]) === -1) {
		 negativeSet.add(a[i])
	 }
	}
	if (positiveSet.size > negativeSet.size) {
		return true
	} else {
		return false
	}
}

function reverseOdd(str) {
	let array = str.split(" ")
	for (i = 0; i < array.length; i++) {
  	if (array[i].length%2 !== 0) {
		console.log("before", array[i])
		let word_array = array[i].split("")
		let reverseArray = word_array.reverse()
    	let joinArray = reverseArray.join("")
		array[i] = joinArray
		console.log("after", array[i])
		}
	}
	let newString = array.join(" ")
	console.log(newString)
	return newString
}

// reverseOdd("One two three four")
// reverseOdd('Make sure uoy only esrever sdrow of ddo length')
// reverseOdd('')
// reverseOdd('Bananas')
// reverseOdd('Even even even even even even even even even')
// reverseOdd('Odd odd odd odd odd odd odd odd odd odd odd')

function commonElements(arr1, arr2) {
	var Set1 = new Set()
	var Set2 = new Set()
	var i;
	for (i = 0; i < arr1.length; i++) {
		Set1.add(arr1[i])
	}
	for (i = 0; i < arr2.length; i++) {
		if (Set1.has(arr2[i])) {
			Set2.add(arr2[i])
		} 
	}
	return Array.from(Set2)
}

function firstRepeat(chars) {
	charsList = chars.split("");
	characters = new Set()
	var i;
	for (i = 0; i < charsList.length; i++) {
		if (characters.has(charsList[i])) {
			return charsList[i]
		} else {
			characters.add(charsList[i])
		}
	}
	return "-1"
}

// firstRepeat("legolas")
// firstRepeat("Balrog")
// firstRepeat("Isildur")
// firstRepeat("Gollum")
// firstRepeat("Galadriel")
// firstRepeat("pippin")
// firstRepeat("Saruman")

function paths(n) {
	let num = n
	let value = 1
	while (num !== 1) {
		value = value * num
		num -= 1
	}
	return value
}

function getTotalPrice(groceries) {
	total = 0
	var i;
	for (i = 0; i < groceries.length; i++) {
		price = groceries[i].quantity * groceries[i].price
		total = total + price
	}
	return  parseFloat((total.toFixed(2)))
}

function prioritySort(arr, s) {
	arr.sort(function(a, b){return a - b});
	let setNums = []
	var i;
	for (i = 0; i < arr.length; i++) {
		if (s.has(arr[i])){
			value = arr.splice(i, 1)
			setNums.push(value[0])
			i -= 1
		}
	}
	setNums.sort(function(a, b){return a - b});
	const finalArr = setNums.concat(arr)
	return finalArr
}

// prioritySort([5, 4, 3, 2, 1], new Set([2, 3]))
// prioritySort([], new Set([2, 3]))
// prioritySort([], new Set())
// prioritySort([1, 2, 3], new Set())
// prioritySort([5, 4, 3, 2, 1], new Set([3, 6]))
// prioritySort([-5, -4, -3, -2, -1, 0], new Set([-4, -3]))
// prioritySort([-10, 0, 10], new Set([0]))
// prioritySort([4, 2, 2], new Set([1]))
// prioritySort([1, 5, 5, 5, 5, 2, 1], new Set([1,5]))

function canConcatenate(arr, target) {
	let concatArr = []
	var i;
	for (i = 0; i < arr.length; i++) {
		concatArr = concatArr.concat(arr[i])
	}
	if (concatArr.length !== target.length) {
		return false
	}
	concatArr.sort()
	target.sort()
	for (i = 0; i < target.length; i++) {
		if (concatArr[i] !== target[i]) {
			return false
		}
		return true
	}
}

canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7])
// canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [1, 2, 3, 4, 5, 6, 7])
// canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1])
// canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7])
// canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7])
// canConcatenate([[1, 4], [3]], [1, 3, 4])
// canConcatenate([[1, 4], [3]], [1, 2, 3, 4])
// canConcatenate([[1, 4], [3]], [4, 3, 1])
// canConcatenate([[1, 4], [2, 3]], [4, 3, 1, 2])
// canConcatenate([[1], [2], [3, 4]], [4, 3, 1, 2])
// canConcatenate([[1], [2], [3], [4]], [4, 3, 1, 2])

function calculateScore(games) {
	let Awins = 0
	let Bwins = 0
	var i;
	for (i = 0; i < games.length; i++) {
		if (games[i][0] === "R" && games[i][1] === "S") {
			Awins += 1
		} else if (games[i][0] === "P" && games[i][1] === "R") {
			Awins += 1
		} else if (games[i][0] === "S" && games[i][1] === "P") {
			Awins += 1
		} else if (games[i][0] === games[i][1]) {
			Awins += 0
		} else {
			Bwins += 1
		}
	}
	if (Awins === Bwins) {
		return "Tie"
	} else if (Awins > Bwins) {
		return "Abigail"
	} else {
		return "Benson"
	}
}

// calculateScore([['R', 'P'], ['R', 'S'], ['S', 'P']])
// calculateScore([['R', 'R'], ['S', 'S']])
// calculateScore([['S', 'R'], ['R', 'S'], ['R', 'R']])
// calculateScore([['S', 'R'], ['P', 'R']])
// calculateScore([['S', 'S'], ['S', 'P'], ['R', 'S'], ['S', 'R'], ['R', 'R']])
// calculateScore([['S', 'R'], ['S', 'R'], ['S', 'R'], ['R', 'S'], ['R', 'S']])

function countLayers(rug) {
	let set = new Set()
	var i;
	for (i = 0; i < rug.length; i++) {
		set.add(rug[i])
	}
	return set.size
}

function leader(arr) {
	var i;
	index = 0
	for (i = 1; i < arr.length; i++) {
		if (arr[i] > arr[i-1]) {
			index = i
		}
	}
	if (index > 0) {
		arr = arr.slice(index)
	}
	return arr
}

// leader([2, 3, 20, 15, 8, 3])
// leader([2, 3, 20, 15, 26, 3])
// leader([1, 2, 3, 4, 3, 10])
// leader([500, 400, 300, 200, 100, 50, 10, 5])
// leader([8, 7, 1, 2, 10, 3, 5])

function overlapping(arr) {
	let range = arr[0]
	var i;
	for (i = 0; i < arr.length; i++) {
		if (arr[i][0] > range[0]) {
			range[0] = arr[i][0]			
		}
		if (arr[i][1] < range[1]) {
			range[1] = arr[i][1]
		}
	}
	if (range[0] > range[1]) {
		return('No overlapping')
	} else {
		return range
	}
}

function isAutobiographical(n) {
	let string = n.toString(10)
	let dictionary = new Object()
	for (i = 0; i < string.length; i++) {
		if (string[i] in dictionary) {
			dictionary[string[i]] += 1
		} else {
			dictionary[string[i]] = 1
		}
	}
	console.log(dictionary)

	for (i = 0; i < string.length; i++) {
		let index = i.toString(10)
		// console.log(dictionary[index], parseInt(string[i]))
		if (string[i] == "0" && string[i] in dictionary) {
			return false
		}
		else if (dictionary[index] != parseInt(string[i]) && string[i] != "0") {
			console.log("false")
			return false
		}
	}
	console.log("true")
	return true
}

// isAutobiographical(6210001000)
// isAutobiographical(12345)
// isAutobiographical(1210)
// isAutobiographical(638)
// isAutobiographical(0)
// isAutobiographical(10 ** 10)
// isAutobiographical(2020)
// isAutobiographical(3211000)
// isAutobiographical(3434343)
// isAutobiographical(2100)

function missingLetter(str) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz"
	var i;
	for (i = 0; i < alphabet.length; i++) {
		if (alphabet.charAt(i) === str.charAt(0)) {
			break
		}
	}
	var j;
	for (j = 0; j < str.length; j++) {
		if (str.charAt(j) !== alphabet.charAt(i)){
			return alphabet.charAt(i)
		} else {
			i += 1
		}
	}
	return "No Missing Letter"
}

function findBrokenKeys(str1, str2) { 
	let brokenKeys = new Set()
	var i;
	for (i = 0; i < str1.length; i++) {
		if (str1.charAt(i) !== str2.charAt(i)) {
			brokenKeys.add(str1.charAt(i))
		}
	}
	return Array.from(brokenKeys)
}

// findBrokenKeys("happy birthday", "hawwy birthday")
// findBrokenKeys("starry night", "starrq light")
// findBrokenKeys("beethoven", "affthoif5")
// findBrokenKeys("mozart", "aiwgvx")
// findBrokenKeys("5678", "4678"), ["5"]
// findBrokenKeys("!!??$$", "$$!!??")

function getFrequencies(arr) {
	frequencies = {}
	var i;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] in frequencies) {
			frequencies[arr[i]] += 1
		} else {
			frequencies[arr[i]] = 1
		}
	}
	console.log(frequencies)
	return frequencies
}

// getFrequencies(['A', 'A'])
// getFrequencies(['A', 'B', 'A', 'A', 'A'])
// getFrequencies(['A', 'B', 'C', 'A', 'A'])
// getFrequencies([true, false, true, false, false])
// getFrequencies([1, 2, 3, 3, 2])
// getFrequencies([])

function missing(arr) {
	let hashTable = {}
	let key_list = []
	var i
	for(i=0; i<arr.length-1; i++) {
		let diff = arr[i+1] - arr[i]
		// console.log(i, arr[i], arr[i+1], diff)
		if (diff in hashTable) {
			hashTable[diff].push(i)
		} else {
			key_list.push(diff)
			hashTable[diff] = [i]
		}
	}
	let difference = 0
	let index = 0
	if (key_list[0] < key_list[1]) {
		difference = key_list[0]
		index = hashTable[key_list[1]]
	} else {
		difference = key_list[1]
		index = hashTable[key_list[0]]
	}
	return arr[index] + difference
}

// missing([1, 3, 4, 5])
// missing([2, 4, 6, 8, 10, 14, 16])
// missing([12, 15, 18, 21, 24, 30, 33])
// missing([0, 60, 180])
// missing([-1.25, 1.25, 2.5])
// missing([1, 19, 28])
// missing([100, 500, 900, 1300, 2100, 2500, 2900])
// missing([1.5, 2, 3])

function countIdenticalArrays(arr1, arr2, arr3, arr4) {
	count = 1
	set = new Set()
	set.add(JSON.stringify(arr1))
	if (set.has(JSON.stringify(arr2))) {
		count += 1
	} else {
		set.add(JSON.stringify(arr2))
	}
	if (set.has(JSON.stringify(arr3))) {
		count += 1
	} else {
		set.add(JSON.stringify(arr3))
	}
	if (set.has(JSON.stringify(arr4))) {
		count += 1
	}
	console.log(set)
	console.log(count)
	if (count > 1) {
		return count
	} else {
		return 0
	}
}

// countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0])
// countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0])
// countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0])

function minMissPos(arr) {
	arr.sort(function(a, b){return a-b});
	arr = Array.from(new Set(arr))
	console.log(arr)
	console.log(arr[0], arr[arr.length-1])
	if (arr[0] <= 0 && arr[arr.length-1] >= 1) {
		i = 0
		while (arr[i] < 1) {
			i++
		}
		if (arr[i] > 1) {
			console.log("1")
			return 1
		} else {
			j = 1
			while (arr[i] === j) {
				i++
				j++
			}
			console.log(j)
			return j
		}
	} else if (arr[arr.length-1] <= 0) {
		return 1
	} else {
		i = 0
		j = arr[0]
		while (arr[i] === j) {
			i++
			j++
		}
		return j
	}
}

// minMissPos([-2, 6, 4, 5, 7, -1, 7, 1, 3, 6, 6, -2, 9, 10, 2, 2])
// minMissPos([5, 9, -2, 0, 1, 3, 9, 3, 8, 9])
// minMissPos([0, 4, 4, -1, 9, 4, 5, 2, 10, 7, 6, 3, 10, 9])
// minMissPos([4, 2, 9, 6, 1, 3, -2, 10, 3, 0, 9, 7, 3])
// minMissPos([0, -4, -4, -1, -9, -4, -5, -2, -10, -7, -6, -3, -10, -9])
// minMissPos([7, 6, 5, 4, 3, 2, 1])

function convert(deg) {
	const tempArray = deg.split("°")
	const conversion = tempArray[tempArray.length-1]
	if(conversion === "C") {
		let temp = Math.round((parseInt(tempArray[0]) * 9/5) + 32)
		const converted = `${temp}°F`
		return converted
	} else if (conversion === "F") {
		let temp = Math.round((parseInt(tempArray[0]) - 32) * 5/9)
		const converted = `${temp}°C`
		return converted
	} else {
		return "Error"
	}
}