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

charIndex('hello', 'l')
charIndex('circumlocution', 'r')
charIndex('circumlocution', 'i')
charIndex('circumlocution', 'c')
charIndex('happy', 'h')
charIndex('happy', 'p')
charIndex('happy', 'e')