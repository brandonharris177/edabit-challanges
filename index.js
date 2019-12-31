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

changeEnough([1, 0, 5, 219], 19.99)