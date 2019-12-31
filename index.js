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


retrieveMajor("6.1.9")
retrieveMinor("6.1.9")
retrievePatch("6.1.9")

retrieveMajor("2.1.0")
retrieveMinor("2.1.0")
retrievePatch("2.1.0")

retrieveMajor("5.12.13")
retrieveMinor("5.12.13")
retrievePatch("5.12.13")