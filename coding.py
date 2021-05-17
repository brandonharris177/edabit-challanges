def findTarget(givenList, target): 
    check = set()
    answers = []
    for number in givenList:
        difference = target-number
        if difference in check and number != difference:
            answers.append([number, difference])
        else:
            check.add(number)
    print(answers)
    return answers

# findTarget([5, 2, 3, 4, 1], 6)

#if 2 strings are isomorphic (mapping between them that will presever order)
#eag aed

def isIsomorphic(string1, string2):
    hashTable = {}
    for index in range(len(string1)):
        if string1[index] not in hashTable:
            hashTable[string1[index]] = string2[index]
        else:
            if hashTable[string1[index]] != string2[index]:
                return False
    return True

            
print(isIsomorphic("paper", "title"))