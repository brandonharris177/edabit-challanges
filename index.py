def sortByHeight(a):
    heights = []
    tree_trakcer_index = set()
    
    for number in range(0, len(a)):
        if a[number] == -1:
            tree_trakcer_index.add(number)
        else:
            heights.append(a[number])
            
    final = []
    heights.sort()
            
    for num in range(0, len(a)):
        if num in tree_trakcer_index:
            final.append(-1)
        else:
            final.append(heights.pop(0))
            
    return final

def reverseInParentheses(inputString):
    final_string = []
    
    hash_table = {}
    
    index = 0
    depth = 0
    max_depth = 0
    while index < len(inputString):
        if inputString[index] == "(" or inputString[index] == ")":
            if inputString[index] == "(":
                depth += 1
                if depth > max_depth:
                    max_depth = depth
            if depth in hash_table:
                hash_table[depth].append(index)
            else:
                hash_table[depth] = []
                hash_table[depth].append(index)
            if inputString[index] == ")":
                depth -= 1
        index += 1
        
    print(hash_table)
    
    while max_depth != 0:
        while len(hash_table[max_depth]) > 0:      
            index2 = int(hash_table[max_depth].pop())
            index1 = int(hash_table[max_depth].pop())
            str = inputString[index1: index2]
            reverse_str = ''.join(reversed(str)) 
            reverse_pointer = 0
            inputString = inputString[:index1] + reverse_str + inputString[index2:]
            reverse_pointer += 1
        max_depth -= 1
        
    inputString = inputString.replace('(', '')
    inputString = inputString.replace(')', '')
    
    print(inputString)
    return inputString

def alternatingSums(a):
    team1 = 0
    team2 = 0
    for num in range(0, len(a)):
        if num == 0 or num%2 == 0:
            team1 = team1 + a[num]
        elif num%2 == 1:
            team2 = team2 + a[num]
            
    return[team1, team2]

def addBorder(picture):
    length = len(picture[0])
    frame = "*" * length
    
    picture.insert(0, frame)
    picture.append(frame)
    
    framed_picture =[]
    
    for line in picture:
        add_frame = "*"+line+"*"
        framed_picture.append(add_frame)
        
    return framed_picture

def areSimilar(a, b):
    similar = True
    list1 = []
    list2 = []
    for num in range(0, len(a)):
        if a[num] != b[num]:
            list1.append(a[num])
            list2.append(b[num])
            if len(list1) > 2:
                similar = False
                break
    
    list1.sort()
    list2.sort()
    
    if list1 != list2:
        similar = False
            
    return similar  

def arrayChange(inputArray):
    count = 0
    for num in range(1, len(inputArray)):
        if inputArray[num-1] >= inputArray[num]:
            old_num = inputArray[num]
            inputArray[num] = inputArray[num-1] + 1
            difference = inputArray[num] - old_num
            count = count + difference
    return count      

def palindromeRearranging(inputString):
    hash_table = {}
    
    for letter in inputString:
        if letter in hash_table:
            hash_table[letter] += 1
        else:
            hash_table[letter] = 1
            
    exemption = 0
    can_rearrange = True
            
    for value in hash_table.values():
        if value == 1 or value%2 == 1:
            exemption += 1
            if exemption > 1:
                can_rearrange = False
                break
                
    return can_rearrange

def areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight):
    equallyStrong = False
    you = []
    freind = []
    if yourLeft > yourRight:
        you.append(yourLeft)
        you.append(yourRight)
    else:
        you.append(yourRight)
        you.append(yourLeft)
    
    if friendsLeft > friendsRight:
        freind.append(friendsLeft)
        freind.append(friendsRight)
    else:
        freind.append(friendsRight)
        freind.append(friendsLeft)
    
    if you[0] == freind[0] and you[1] == freind[1]:
        equallyStrong = True
    
    return equallyStrong

def arrayMaximalAdjacentDifference(inputArray):
    max_distance = 0
    for num in range(0, len(inputArray)-1):
        difference = abs(inputArray[num] - inputArray[num+1])
        if difference > max_distance:
            max_distance = difference
    
    return max_distance

import re

def isIPv4Address(inputString):
    
    letter = re.search("[a-zA-Z]", inputString)
    special = re.search("[+]", inputString)
    
    if letter != None or special != None:
        print(letter)
        print(special)
        print("fail1")
        return False
    
    count = 0
        
    for char in inputString:
        if char == ".":
            count += 1
            
    if count != 3:
        return False
            
    IParray = inputString.replace(".", " ")
    IParray = IParray.split()
    
    if len(IParray) != 4:
        print("fail2")
        return False
    
    print(IParray)
        
    for num in IParray:
        if str(int(num)) != num or int(num) > 255:
            print("fail3")
            return False
            
    return True


def avoidObstacles(inputArray):
    
    inputArray.sort()
    arraySet = set(inputArray)

    longest_jump = 1

    while longest_jump in arraySet:
        longest_jump += 1

    jump_point = longest_jump
    changed = False
    additional = 0
    
    while jump_point < inputArray[-1]:
        jump_point = jump_point + longest_jump
        while jump_point in arraySet:
            changed = True
            additional += 1
            jump_point += 1
        if changed == True:
            longest_jump = longest_jump + additional
            additional = 0
            while longest_jump in arraySet:
                longest_jump += 1
            jump_point = longest_jump
            changed = False
                
    return longest_jump

def boxBlur(image):
    def getSum(row, column):
        surroundings = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, -1], [1, 0], [1, 1]]
        total = 0
        for coordinate in surroundings:
            total = total + image[row + coordinate[0]][column + coordinate[1]]
        total = total/9
        return math.floor(total)
        
    blurredImage = []
    index = -1
              
    for row in range(1, len(image)-1):
        blurredImage.append([])
        index += 1
        for column in range(1, len(image[row])-1):
            value = getSum(row, column)
            blurredImage[index].append(value)
            
    return blurredImage

def minesweeper(matrix):
    def getSum(row, column):
        surroundings = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
        total = 0
        for coordinate in surroundings:
            if 0 <= row + coordinate[0] < len(matrix) and 0 <= column + coordinate[1] < len(matrix[row]):
                if matrix[row + coordinate[0]][column + coordinate[1]] == True:
                    total+=1
        return total
              
    mineMatrix = []
    index = -1
    
    for row in range(0, len(matrix)):
        mineMatrix.append([])
        index += 1
        for column in range(0, len(matrix[row])):
            value = getSum(row, column)
            mineMatrix[index].append(value)
         
    return mineMatrix

def arrayReplace(inputArray, elemToReplace, substitutionElem):
    for index in range(0, len(inputArray)):
        if inputArray[index] == elemToReplace:
            inputArray[index] = substitutionElem
            
    return inputArray

def evenDigitsOnly(n):
    even = True
    strN = str(n)
    for digit in strN:
        if int(digit)%2 == 1:
            even = False
            break
            
    return even

import re

def variableName(name):
    startsWith = re.search("^[a-zA-Z]", name)
    if startsWith == None:
        startsWith = re.search("_", name)
        if startsWith == None:
            return False
    
    for char in name:    
        match = re.search("[a-zA-Z]", char)
        if match == None:
            match = re.search("_", char)
            if match == None:
                match = re.search("[0-9]", char)
                if match == None:
                    return False

    return True

def alphabeticShift(inputString):
    alphabet_hash = {}
    alphabet_string_keys = string.ascii_lowercase
    alphabet_string_values = alphabet_string_keys + 'a'
    for index in range(0, 26):
        alphabet_hash[alphabet_string_keys[index]] = alphabet_string_values[index + 1]
    
    inputList = list(inputString)
        
    for index in range(0, len(inputList)):
        if inputList[index] in alphabet_hash:
            inputList[index] = alphabet_hash[inputList[index]]

    outputString = "".join(inputList)
    
    return outputString

def chessBoardCellColor(cell1, cell2):
    color1 = ''
    color2 = ''
    alphabet_hash = {
        "A":1,
        "B":2,
        "C":3,
        "D":4,
        "E":5,
        "F":6,
        "G":7,
        "H":8
    }
    coord1 = alphabet_hash[cell1[0]]
    coord2 = alphabet_hash[cell2[0]]
    
    if int(cell1[1])%2 == 0:
        if int(coord1)%2 == 0:
            color1 = "Black"
        else:
            color1 = "White"
    else:
        if int(coord1)%2 != 0:
            color1 = "Black"
        else:
            color1 = "White"
            
    if int(cell2[1])%2 == 0:
        if int(coord2)%2 == 0:
            color2 = "Black"
        else:
            color2 = "White"
    else:
        if int(coord2)%2 != 0:
            color2 = "Black"
        else:
            color2 = "White"
            
    if color1 == color2:
        return True
    else:
        return False

def circleOfNumbers(n, firstNumber):
    halfway = n/2
    number = firstNumber+ halfway
    
    if number < n:
        return number
    else:
        number = number - n
        return number

def depositProfit(deposit, rate, threshold):
    difference = threshold - deposit
    amount = deposit
    rate = rate/100
    interest = 1 + rate
    periods = 0
    while amount < threshold:
        amount = amount * interest
        periods += 1
        
    return periods

def absoluteValuesSumMinimization(a):
    lowest_value = 0
    value = 0
    for num1 in range(0, len(a)):
        total = 0
        for num2 in range(0, len(a)):
            difference = abs(a[num1] - a[num2])
            total = total + difference
            if num2 == len(a)-1:
                if num1 == 0:
                    lowest_value = total
                    value = a[num1]
                if total < lowest_value:
                    lowest_value = total
                    value = a[num1]
                if total == lowest_value and a[num1] < value:
                    value = a[num1]
    
    return value

def extractEachKth(inputArray, k):
    popList = []
    popNum = k
    while popNum <= len(inputArray):
        popList.append(popNum)
        popNum += k
        
    popList.reverse()
        
    for num in popList:
        inputArray.pop(num-1)
    
    return inputArray

import re

def firstDigit(inputString):
    for char in inputString:
        x = re.search("[0-9]", char)
        if x:
            return char

def differentSymbolsNaive(s):
    letterSet = set()
    for letter in s:
        letterSet.add(letter)
        
    return len(letterSet)

def arrayMaxConsecutiveSum(inputArray, k):

    end = 0
    indexSum = 0
    start = 0
    
    for index in range(0, k):
        indexSum = indexSum + inputArray[index] 
        end += 1
            
    largestNum = indexSum
    
    while end < len(inputArray):
        indexSum = indexSum + inputArray[end]
        indexSum = indexSum - inputArray[start]
        if indexSum > largestNum:
            largestNum = indexSum
        end += 1
        start += 1
        
    return largestNum

def growingPlant(upSpeed, downSpeed, desiredHeight):
    if upSpeed > desiredHeight:
        return 1
    growthAmount = desiredHeight - upSpeed 
    dailyGrowth = upSpeed - downSpeed
    days = math.ceil(growthAmount/dailyGrowth) + 1
    
    return days

def knapsackLight(value1, weight1, value2, weight2, maxW):
    total = weight1 + weight2
    if total <= maxW:
        return value1 + value2
        
    if value1 > value2 and weight1 <= maxW:
        return value1
        
    if weight2 <= maxW:
        return value2
        
    if weight1 <= maxW:
        return value1
        
    return 0

def longestDigitsPrefix(inputString):
    string = ""
    for char in inputString:
        try:
            num = int(char)
        except ValueError:
            return string
        string = string + char
        
    return string

def stringsRearrangement(inputArray):
    hash_table = {}
    
    for index1 in range(0, len(inputArray)):
        hash_table[inputArray[index1]] = []
        for index2 in range(0, len(inputArray)):
            differ = 0
            for index3 in range(0, len(inputArray[index1])):
                if index1 != index2:
                    if inputArray[index1][index3] != inputArray[index2][index3]:
                        differ += 1
                    if index3 == len(inputArray[index1])-1 and differ == 1:
                        hash_table[inputArray[index1]].append(inputArray[index2])
                        
    # print(hash_table)
                    
    for key, value in hash_table.items():
        if len(value) == 0:
            return False
            
    letterSet = {inputArray[0]}
    
    stack = [inputArray[0]]
    
    while len(stack) > 0:
        if stack[0] in hash_table:
            for value in hash_table[stack[0]]:
                letterSet.add(value)
                stack.append(value)
            hash_table.pop(stack[0])
        stack.pop(0)
    
    print(letterSet)
    
    if len(letterSet) == len(inputArray):
        return True
    
    return False

def digitDegree(n):
    count = 0
    num = n
    while len(str(num)) != 1:
        total = 0
        for num in str(num):
            total = total + int(num)
        num = total
        count += 1
        
    return count

def stringsRearrangement(inputArray):
    hash_table = {}
    
    for index1 in range(0, len(inputArray)):
        hash_table[inputArray[index1]] = []
        for index2 in range(0, len(inputArray)):
            differ = 0
            for index3 in range(0, len(inputArray[index1])):
                if index1 != index2:
                    if inputArray[index1][index3] != inputArray[index2][index3]:
                        differ += 1
                    if index3 == len(inputArray[index1])-1 and differ == 1:
                        hash_table[inputArray[index1]].append(inputArray[index2])
                                            
    for key, value in hash_table.items():
        if len(value) == 0:
            return False
            
    letterSet = {inputArray[0]}
    
    stack = [inputArray[0]]
    
    while len(stack) > 0:
        if stack[0] in hash_table:
            for value in hash_table[stack[0]]:
                letterSet.add(value)
                stack.append(value)
            hash_table.pop(stack[0])
        stack.pop(0)
        
    if len(letterSet) == len(inputArray):
        return True
    
    return False

import itertools

def stringsRearrangement(inputArray):
    permutations_object = itertools.permutations(inputArray)
    permutations_list = list(permutations_object)
    
    iteration = 0

    while iteration < len(permutations_list):
        oneLetterChange = 0
        for word in range(0, len(permutations_list[iteration])-1):
            difference = 0
            for letter in range(0, len(permutations_list[iteration][word])):
                if permutations_list[iteration][word][letter] != permutations_list[iteration][word+1][letter]:
                    difference += 1
            if difference == 1:
                oneLetterChange += 1
            else:
                iteration += 1
                break
        if oneLetterChange == len(inputArray)-1:
            return True
                
    return False

def bishopAndPawn(bishop, pawn):
    if bishop[0] == pawn[0] or bishop[1] == pawn[1]:
        return False
        
    directions = []
    hash_table = {
        "a": 0,
        "b": 1,
        "c": 2,
        "d": 3,
        "e": 4,
        "f": 5,
        "g": 6,
        "h": 7
    }
    movement = ["a", "b", "c", "d", "e", "f", "g", "h"]
    
    if bishop[0] > pawn[0]:
        directions.append(-1)
    else:
        directions.append(1)
        
    if int(bishop[1]) > int(pawn[1]):
        directions.append(-1)
    else:
        directions.append(1)
        
    while 0 < int(bishop[1]) <= 8:
        print(bishop)
        index = hash_table[bishop[0]] + directions[0] 
        bishop = movement[index] + bishop[1]
        bishop = bishop[0] + str(int(bishop[1]) + directions[1]) 
        if bishop == pawn:
            return True
        if bishop[0] == "a" or bishop[0] == "h":
            return False
        
    return False

def isBeautifulString(inputString):
    
    sorted_characters = sorted(inputString)
    sortedString = "". join(sorted_characters)
    
    hash_table = {}
    lastLetter = sortedString[-1] 
    alphabet = string.ascii_lowercase
    letterList = []
    
    for letter in alphabet:
        if letter != lastLetter:
            letterList.append(letter)
        else:
            letterList.append(letter)
            break
    
    for letter in sortedString:
        if letter in hash_table:
            hash_table[letter] += 1
        else:
            hash_table[letter] = 1
            
    for index in range(0, len(letterList)-1):
        print(letterList[index])
        if letterList[index] not in hash_table:
            return False
        if letterList[index + 1] in hash_table:
            if hash_table[letterList[index]] < hash_table[letterList[index+1]]:
                return False
            
    return True
            
def findEmailDomain(address):
    addressList = address.split("@")
    return addressList[-1]

def electionsWinners(votes, k):
    current_winner = 0
    tie = False
    
    for vote in votes:
        if vote == current_winner:
            tie = True
        if vote > current_winner:
            current_winner = vote
            tie = False
            
    if k == 0:
        print(tie)
        if tie == False:
            return 1
        if tie == True:
            return 0
    
    potential_winners = 0
    for vote in votes:
        if vote+k > current_winner:
            potential_winners += 1
            
    return potential_winners

def buildPalindrome(st):
    index = math.floor(len(st)/2)
    pointer1 = index-1
    pointer2 = index+1
    
    while 0 <= pointer1 and pointer2 < len(st)-1:
        if st[pointer1] == st[pointer2]:
            pointer1 -= 1
            pointer2 += 1
        else:
            index += 1
            pointer1 = index-1
            pointer2 = index+1
                    
    if index == len(st)-2 and st[pointer1] != st[pointer2]:
        if st[index] != st[pointer2]:
            pointer1 = index
    elif st[pointer1] == st[pointer2]:
        pointer1 -= 1
    
    while pointer1 >= 0:
        first_half = st[0: int(math.floor(len(st)/2))]
        second_half = st[int(math.ceil(len(st)/2)): len(st)]
        reverse = second_half[::-1]
        if first_half == reverse:
            return st
        st = st + st[pointer1]
        pointer1 -= 1
    
    return st

import re

def isMAC48Address(inputString):
    inputList = inputString.split("-")
    
    if len(inputList) != 6:
        return False
    
    for group in inputList:
        if len(group) != 2:
            return False
        for char in group:
            if re.search("[0-9]|[A-F]", char) == None:
                return False
                
    return True

import re 

def isDigit(symbol):
    if re.search("[0-9]", symbol) == None:
        return False
        
    return True

def lineEncoding(s):
    
    coded = ""
    currentChar = s[0]
    count = 0
    
    for index in range(0, len(s)):
        if s[index] == currentChar:
            count += 1
        else:
            if count > 1:
                coded = coded + str(count) + currentChar
            else:
                coded = coded + currentChar
            currentChar = s[index]
            count = 1 
            
        if index == len(s)-1:
            if count > 1:
                coded = coded + str(count) + currentChar
            else:
                coded = coded + currentChar
            
    return coded

def deleteDigit(n):
    numStr = str(n)
    highestNum = 0
    
    for index in range(0, len(numStr)):
        replace = int(numStr.replace(numStr[index], '', 1))
        if replace > highestNum:
            highestNum = replace
                
    return highestNum

import re

def longestWord(text):
    textList = re.split(' |, |_|-|!|\[|\]', text)
    longestWord = ""
    
    for word in textList:
        onlyLetters = re.findall("[a-z]|[A-Z]", word)
        newWord = ""
        for letter in onlyLetters:
            newWord = newWord + letter
        if len(newWord) > len(longestWord):
            longestWord = newWord 
        
    return longestWord

def validTime(time):
    time = time.split(":")
    if 0 <= int(time[0]) <= 23 and 0 <= int(time[1]) <= 59:
        return True
    else:
        return False

def sumUpNumbers(inputString):
    previousInt = False
    numberStr = ""
    
    for char in inputString:
        is_int = True
        try: 
            int_char = int(char)
        except:
            is_int = False
        if is_int == True:
            numberStr = numberStr + char
            previousInt = True
        if is_int == False and previousInt == True:
            numberStr = numberStr + " "
            previousInt = False
            
    numberList = numberStr.split()
    total = 0
    
    for number in numberList:
        total = total + int(number)
    
    return total

def differentSquares(matrix):
    hashTable = {}
    coordinates = [[-1, -1], [-1, 0], [0, -1], [0, 0]]
    unique = 0
    for column in range(1, len(matrix)):
        for row in range(1, len(matrix[column])):
            fourByFour = ""
            for coordinate in coordinates:
                number = matrix[column + coordinate[0]][row + coordinate[1]]
                fourByFour = fourByFour + str(number)
            if fourByFour not in hashTable:
                hashTable[fourByFour] = fourByFour
                unique += 1
    
    return(unique)

def digitsProduct(product):
    if product == 0:
        return 10
    
    if product < 10:
        return product
        
    prime = 2
    remainder = product
    hash_table = {}
    index = 0
    keys = []
    
    while prime <= remainder:
        if remainder % prime == 0:
            if prime in hash_table:
                hash_table[prime] += 1
            else:
                hash_table[prime] = 1
                keys.append(prime)
            remainder = remainder/prime
        else:
            prime += 1
        index += 1
            
    if product in hash_table:
        return -1
        
    for key in keys:
        if key > 9:
            return -1
    
    if 2 in hash_table and hash_table[2] >= 3:
        eights = math.floor(hash_table[2]/3)
        hash_table[2] -= eights * 3
        hash_table[8] = eights
        keys.append(8)
        if hash_table[2] == 0:
            hash_table.pop(2, None)
            keys.remove(2)
                  
    if 3 in hash_table and hash_table[3] >= 2:
        nines = math.floor(hash_table[3]/2)
        hash_table[3] -= nines * 2
        hash_table[9] = nines
        keys.append(9)
        if hash_table[3] == 0:
            hash_table.pop(3, None)
            keys.remove(3)
            
    if 2 in hash_table and 3 in hash_table:
        hash_table[6] = 1
        keys.append(6)
        hash_table.pop(3, None)
        keys.remove(3)
        hash_table[2] -= 1
        if hash_table[2] == 0:
            hash_table.pop(2, None)
            keys.remove(2)
            
    if 2 in hash_table and hash_table[2] == 2:
        hash_table[4] = 1
        keys.append(4)
        hash_table.pop(2, None)
        keys.remove(2)
        
    keys.sort()
        
    number = ""
    for key in keys:
        values = str(key) * hash_table[key]
        number = number + values
    
    return int(number)

def fileNaming(names):
    hashTable ={}
    for index in range(0, len(names)):
        original_name = names[index]
        if original_name in hashTable:
            newName = original_name + "(" + str(hashTable[original_name]) + ")"
            while newName in hashTable:
                hashTable[original_name] += 1
                newName = original_name + "(" + str(hashTable[original_name]) + ")"
            hashTable[original_name] += 1
            hashTable[newName] = 1
            names[index] = newName
        else:
            hashTable[original_name] = 1
            
    return names

def messageFromBinaryCode(code):
    decrypted = ""
    start = 0
    end = 8
    while end <= len(code):
        bit = chr(int(code[start: end], base=2))
        decrypted = decrypted + bit
        start += 8
        end += 8
        
    return decrypted

def spiralNumbers(n):        
    matrix = [ [ 0 for i in range(n) ] for j in range(n) ]
        
    number = 1
    limit = n*n
    row = 0
    column = -1
    while number <= limit:
        while column < n-1:
            column += 1
            if matrix[row][column] == 0:
                matrix[row][column] = number
                number += 1
            else:
                column -= 1
                break
        while row < n-1: 
            row += 1
            if matrix[row][column] == 0:
                matrix[row][column] = number
                number += 1
            else:
                row -= 1
                break    
        while column >= 0: 
            column -= 1
            if matrix[row][column] == 0:
                matrix[row][column] = number
                number += 1
            else:
                column += 1
                break
        while row >= 0: 
            row -= 1
            if matrix[row][column] == 0:
                matrix[row][column] = number
                number += 1
            else:
                row += 1
                break
            
    return matrix

def sudoku(grid):
    hashTable = {
        "rows": [],
        "columns": {},
        "square1": [],
        "square2": [],
        "square3": []
    }
    
    def check(arr):
        sorted_arr = sorted(arr)
        one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        for index in range(0, len(one_to_nine)):
            if one_to_nine[index] != sorted_arr[index]:
                return False
        return True

    for row in range(0, len(grid)):
        hashTable["rows"] = []
        if row == 3 or row == 6:
            if check(hashTable["square1"]) == False:
                return False
            if check(hashTable["square2"]) == False:
                return False
            if check(hashTable["square3"]) == False:
                return False
            hashTable["square1"] = []
            hashTable["square2"] = []
            hashTable["square3"] = []
        for column in range(0, len(grid[row])):
            hashTable["rows"].append(grid[row][column])
            if column in hashTable["columns"]:
                hashTable["columns"][column].append(grid[row][column])
            else:
                hashTable["columns"][column] = [grid[row][column]]
            if 0 <= column <= 2:
                hashTable["square1"].append(grid[row][column])
            if 2 < column <= 5:
                hashTable["square2"].append(grid[row][column])
            if 5 < column <= 8:
                hashTable["square3"].append(grid[row][column])
        if check(hashTable["rows"]) == False:
            return False
        
    if check(hashTable["square1"]) == False:
        return False
    if check(hashTable["square2"]) == False:
        return False
    if check(hashTable["square3"]) == False:
        return False
        
    for value in hashTable["columns"].values():
        if check(value) == False:
            return False
        
    return True   

def newRoadSystem(roadRegister):
    hashTable = {}
    for inGoing in range(0, len(roadRegister)):
        for outGoing in range(0, len(roadRegister[inGoing])):
            if roadRegister[inGoing][outGoing] == True:
                if inGoing in hashTable:
                    hashTable[inGoing][0].append(outGoing)
                else:
                    hashTable[inGoing] = [[outGoing], []]
                if outGoing in hashTable:
                    hashTable[outGoing][1].append(inGoing)
                else:
                    hashTable[outGoing] = [[], [inGoing]]
                    
    for value in hashTable.values():
        if len(value[0]) != len(value[1]):
            return False
            
    return True      

def largestNumber(n):
    num = ["9"]*n
    num = int("".join(num))
    return num 

def roadsBuilding(cities, roads):
    hashTable = {}
    key = 0
    while key < cities-1:
        hashTable[key] = []
        connection = key+1
        while connection < cities:
            hashTable[key].append([key, connection])
            connection += 1
        key += 1
        
    for road in roads:
        if road[0] > road[1]:
            smallestValue = 1
            largestValue = 0
        else:
            smallestValue = 0
            largestValue = 1
        hashTable[road[smallestValue]].remove([road[smallestValue], road[largestValue]])
        
    roadsToBuild = []
    
    for value in hashTable.values():
        if len(value) > 0:
            for connection in value:
                roadsToBuild.append(connection)
    
    return roadsToBuild

def efficientRoadNetwork(n, roads):
    if n == 1:
        return True
    
    hashTable = {}
        
    for road in roads:
        if road[0] not in hashTable:
            hashTable[road[0]] = []
        if road[1] not in hashTable:
            hashTable[road[1]] = []
        hashTable[road[0]].append(road[1])
        hashTable[road[1]].append(road[0])
    
    city = 0
        
    while city < n:
        if city not in hashTable:
            return False
        visited = set(hashTable[city])
        for destination in hashTable[city]:
            visited.update(hashTable[destination])
        if len(visited) < n:
            return False
        city += 1
                
    return True

import copy

def financialCrisis(roadRegister):
    removeCity = 0
    removedRegister = []
    while removeCity < len(roadRegister):
        registerCopy = copy.deepcopy(roadRegister)
        registerCopy.pop(removeCity)
        for rowIndex in range(0, len(registerCopy)):
            registerCopy[rowIndex].pop(removeCity)
        removedRegister.append(registerCopy)
        removeCity += 1
        
    return removedRegister

def namingRoads(roads):
    hashTable = {}
    for road in roads:
        if road[0] not in hashTable:
            hashTable[road[0]] = []
        if road[1] not in hashTable:
            hashTable[road[1]] = []
        hashTable[road[0]].append(road[2])
        hashTable[road[1]].append(road[2])
        
    for value in hashTable.values():
        sortedValues = sorted(value)
        for integer in range(0, len(sortedValues)-1):
            if sortedValues[integer] + 1 == sortedValues[integer + 1]:
                return False
                
    return True

def greatRenaming(roadRegister):
    firstCity = roadRegister.pop()
    roadRegister.insert(0, firstCity)
    
    for city in roadRegister:
        shift = city.pop()
        city.insert(0, shift)
        
    return roadRegister

def phoneCall(min1, min2_10, min11, s):
    mins = 0
    if s >= min1:
        s = s-min1
        mins = 1
    else:
        return 0

    if s >= min2_10:
        numMins = math.floor(s/min2_10)
        if numMins >= 9:
            s = s - 9*min2_10
            mins = 10
        else:
            mins = mins + numMins
            return mins
    else:
        return mins
            
    if s >= min11:
        numMins = math.floor(s/min11)
        return mins + numMins
    else:
        return mins  

def mergingCities(roadRegister):
    hashTable = {}
    connected = []
    for city in range(len(roadRegister)):
        hashTable[city] = []
        for road in range(len(roadRegister[city])):
            if roadRegister[city][road] == True:
                hashTable[city].append(road)
                if road == 0 or road%2 == 0:
                    if road in hashTable and city in hashTable[road] and city-1 == road:
                        connected.append(road)
                        connected.append(city)
    
    length = int(len(roadRegister) - len(connected)/2)   
    
    while len(connected) > 0:
        hashTable[connected[0]] = list(set(hashTable[connected[0]] + hashTable[connected[1]]))
        hashTable[connected[0]].remove(connected[0])
        hashTable[connected[0]].remove(connected[1])
        for pair in hashTable.items():
            for index in range(len(pair[1])):
                if hashTable[pair[0]][index] > connected[0]:
                    hashTable[pair[0]][index] -= 1
            if pair[0] > connected[1]:     
                hashTable[pair[0]-1] = hashTable[pair[0]]
        for index in range(len(connected)):
            connected[index] = connected[index] - 1 
        hashTable.pop(pair[0])
        connected.pop(0)
        connected.pop(0)           
        
    newRegister = []
    for index in range(length):
        cities = [False]*length
        newRegister.append(cities)
    
    for key in range(length):
        for value in hashTable[key]:
            newRegister[key][value] = True   
               
    return newRegister

def isButterfly(adj):

    hashTable = {}

    for rowIndex in range(len(adj)):
        hashTable[rowIndex] = []
        for colIndex in range(len(adj[rowIndex])):
            if adj[rowIndex][colIndex] == True:
                hashTable[rowIndex].append(colIndex)
    
    
    not2 = []
    for key in hashTable.keys():
        if len(hashTable[key]) != 2:
            not2.append(key)
            
    if len(not2) != 1:
        return False
        
    centerpoint = not2[0]
    
    if len(hashTable[centerpoint]) != 4:
        return False
    
    for key in hashTable.keys():
        if int(key) in hashTable[key]:
            return False
        if key != centerpoint:
            if int(centerpoint) not in hashTable[key]:
                return False
        for value in hashTable[key]:
            if int(key) not in hashTable[value]:
                return False
    
    return True

def countStars(adj):
    hashTable = {}
    centerpoints = []
    keys = []
    for rowIndex in range(len(adj)):
        hashTable[rowIndex] = []
        keys.append(rowIndex)
        for columnIndex in range(len(adj[rowIndex])):
            if adj[rowIndex][columnIndex] == True:
                hashTable[rowIndex].append(columnIndex)
                if len(hashTable[rowIndex]) > 1:
                    centerpoints.append(rowIndex)
                    if rowIndex in keys:
                        keys.remove(rowIndex)
    
    keys = list(set(keys))
    centerpoints = set(centerpoints)
    
    shapes = 0
    isShape = False
    
    if len(centerpoints) > 0:             
        for centerpoint in centerpoints:
            if isShape == True:
                shapes += 1
            isShape = True
            for point in hashTable[centerpoint]:
                if point in keys:
                    keys.remove(point)
                if len(hashTable[point]) != 1 or hashTable[point][0] != centerpoint:
                    isShape = False
                    
    if isShape == True:
        shapes += 1
      
    visited = []
        
    if len(keys) > 0:             
        for key in keys:
            if key not in visited and len(hashTable[key]) > 0:
                value = hashTable[key][0]
                if len(hashTable[value]) > 0 and hashTable[value][0] == key and key != value:
                    visited.append(value)
                    shapes += 1 
    
    return shapes

def knapsackLight(value1, weight1, value2, weight2, maxW):
    if weight1 + weight2 <= maxW:
        return value1 + value2
        
    if value1 > value2:
        greaterValue = value1
        greaterValueWeight = weight1
        lesserValue = value2
        lesserValueWeight = weight2
    elif value2 > value1:
        greaterValue = value2
        greaterValueWeight = weight2
        lesserValue = value1
        lesserValueWeight = weight1
    else:
        if weight1 or weight2 <= maxW:
            return value1
        else:
            return 0
            
    if greaterValueWeight <= maxW:
        return greaterValue
    
    if lesserValueWeight <= maxW:
        return lesserValue

    return 0 

def isInfiniteProcess(a, b):
    while b >= a:
        if a == b: 
            return False
        a = a + 1
        b = b - 1
        
    return True

def isWheel(adj):
    hashTable = {}
    centerpoint = []
    for rowIndex in range(len(adj)):
        hashTable[rowIndex] = []
        for columnIndex in range(len(adj[rowIndex])):
            if adj[rowIndex][columnIndex] == True:
                hashTable[rowIndex].append(columnIndex)
                if len(hashTable[rowIndex]) == len(adj)-1:
                    centerpoint.append(rowIndex)
                    
    if len(centerpoint) == 4 and len(centerpoint) == len(adj):
        return True
                    
    if len(centerpoint) != 1:
        return False
        
    centerpoint = centerpoint[0]
    
    centerList = hashTable[centerpoint]
    
    if centerpoint in centerList or len(centerList) != len(adj)-1:
        return False
    
    if centerpoint == 0:
        point = 1
    else:
        point = 0
    
    visited = []
    previouspoint = ""
    
    while point not in visited:
        if centerpoint not in hashTable[point] or len(hashTable[point]) != 3:
            return False
        listCopy = hashTable[point].copy()
        listCopy.remove(centerpoint)
        if previouspoint != "":
            listCopy.remove(previouspoint)
        previouspoint = point
        visited.append(point)
        point = listCopy[0]
    
    if len(visited) != len(adj)-1:
        return False
    
    return True

def tennisSet(score1, score2):
    if score1 > 7 or score2 > 7:
        return False

    if score1 < 6 and score2 < 6:
        return False
    
    if score1 == 6 and score2 < 5:
        return True
        
    if score2 == 6 and score1 < 5:
        return True
    
    if score1 == 7 and 4 < score2 < 7:
        return True
        
    if score2 == 7 and 4 < score1 < 7:
        return True
    
    return False 

def arrayPacking(a):
    a.reverse()
    bins = ""
    for num in a:
        number = str(bin(num).replace("0b",""))
        if len(number) < 8:
            numZeros = 8 - len(number)
            zeros = "0"*numZeros
            number = zeros + number
        bins = bins + number

    return int(bins, 2)

def rangeBitCount(a, b):
    count = 0
    num = a
    while num <= b:
        count += len(str(bin(num).replace("0b","").replace("0", "")))
        num += 1
        
    return count

def mirrorBits(a):
    return int(str(bin(a).replace("0b",""))[::-1], 2)

def secondRightmostZeroBit(n):
    return 2**(str(bin(n).replace("0b", "")[::-1].replace("0", "", 1)).find("0") + 1)

def swapAdjacentBits(n):
    return swap(n)

def swap(n):
    binary = str(bin(n).replace("0b", ""))
    if len(binary)%2 != 0:
        binary = "0" + binary 
        
    count = 0
    
    while count <= len(binary)-1:
        binary = ''.join((binary[:count], binary[count+1], binary[count], binary[count+2:]))
        count += 2
     
    return int(binary, 2)

def differentRightmostBit(n, m):
    return 2 ** len(bin(n^m)) if bin(n^m).replace("0b", "")[::-1].find("1") == -1 else 2 ** bin(n^m).replace("0b", "")[::-1].find("1")

def equalPairOfBits(n, m):
    return 2 ** len(bin(n^m).replace("0b", "")) if bin(n^m).replace("0b", "")[::-1].find("0") == -1 else 2 ** bin(n^m).replace("0b", "")[::-1].find("0")

def leastFactorial(n):
    k = 1
    m = 1
    while k < n:
        m += 1
        k = k*m
        
    return k

def countSumOfTwoRepresentations2(n, l, r):
    A = l
    B = n-l
    count = 0
    if A + B == n and l <= A <= B <= r:
        while l <= A <= B <= r:
            count += 1
            A += 1
            B -= 1    
        return count
        
    B = r
    A = n-r
    if A + B == n and l <= A <= B <= r:
        while l <= A <= B <= r:
            count += 1
            A += 1
            B -= 1        
        return count
        
    return count

def magicalWell(a, b, n):
    total = 0
    while n > 0:
        total = a*b + total
        a += 1
        b += 1
        n -= 1
        
    return total

def lineUp(commands):
    directions = [0, 0]
    same = 0
    for command in commands:
        if command == "L":
            directions[0] += 1
            directions[1] -= 1
        if command == "R":
            directions[0] -= 1
            directions[1] += 1
        if command == "A":
            directions[0] += 2
            directions[1] -= 2
        if directions[0] == -1:
            directions[0] = 3
        if directions[1] == -1:
            directions[1] = 3
        if directions[0] == -2:
            directions[0] = 2
        if directions[1] == -2:
            directions[1] = 2
        if directions[0] > 3:
            directions[0] = directions[0]%4
        if directions[1] > 3:
            directions[1] = directions[1]%4
            
        if directions[0] == directions[1]:
            same += 1
            
    return same

def increaseNumberRoundness(n):
    string = str(n)[::-1]
    index = 0
    while string[index] == "0" and index < len(string):
        string = string.replace('0','',1)
        
    roundness = string.find("0")
    
    if roundness == -1:
        return False
        
    return True

def rounders(n):
    numList = [int(x) for x in str(n)[::-1]] 
    newNum = ''
    
    for num in range(len(numList)-1):
        if numList[num] >= 5:
            numList[num+1]+=1
    
    zeros = len(numList)-1
    newNum = str(numList[-1]) + "0"*zeros
        
    return int(newNum)

def candles(candlesNumber, makeNew):
    num = candlesNumber
    leftOvers = candlesNumber
    while leftOvers >= makeNew:
        candles = math.floor(leftOvers/makeNew)
        remainder = leftOvers - candles*makeNew
        num = num + candles
        leftOvers = candles + remainder
        
    return num

def countBlackCells(n, m):
    intersection = 0
    black_cells = 0
    row = 1
    while row <= n:
        next_intersection = (m/n) * row
        amount = math.ceil(next_intersection) - math.floor(intersection)
        if row != n and next_intersection == math.floor(next_intersection):
            black_cells+=2
        black_cells = black_cells + amount
        intersection = next_intersection
        row += 1
        
    return black_cells

def removeArrayPart(inputArray, l, r):
    return inputArray[0:l] + inputArray[r+1:len(inputArray)]

def isSmooth(arr):
    length = len(arr)
    if length%2 != 0:
        middle = arr[math.floor(length/2)]
    else:
        length = length/2
        middle = arr[math.ceil(length)] + arr[math.floor(length-1)]
        
    if arr[0] == arr[-1] == middle:
        return True
    else:
        return False

def replaceMiddle(arr):
    if len(arr)%2 == 0:
        middle = math.floor(len(arr)/2)
        arr[middle] = arr[middle] + arr[middle-1]
        del arr[middle-1]
    return arr

def makeArrayConsecutive2(statues):
    statues.sort()
    missing = 0
    for index in range(len(statues)-1):
        between = statues[index+1] - statues[index] - 1
        missing += between
    
    return missing

def isSumOfConsecutive2(n):
    divisor = 2
    ways = 1
    while divisor <= n:
        count = 0
        while n%divisor == 0:
            n = n/divisor
            count+=1
        if count > 0 and divisor%2 != 0:
            ways = ways*(1+count)
        divisor+=1
    
    return ways-1

def squareDigitsSequence(a0):
    occored = set()
    num = a0
    count = 1
    while num not in occored:
        occored.add(num)
        count+=1
        stringNum = str(num)
        num = 0
        for integer in stringNum:
            num = num + int(integer)**2
            
    return count

def pagesNumberingWithInk(current, numberOfDigits):
    total = current-1
    remainder = numberOfDigits 
    digitsPerInt = len(str(total))
    roundUp = int("1" + digitsPerInt * "0") - 1
    amountToGo = roundUp-total
    rounding = 0
    while remainder-amountToGo*digitsPerInt >= 0:
        rounding = 1
        total = roundUp
        digitsPerInt = len(str(total))
        remainder -= amountToGo * digitsPerInt
        roundUp = roundUp*10 + 9
        amountToGo = roundUp - total
        
    total+=math.floor(remainder/(digitsPerInt + rounding))
        
    return total

def weakNumbers(n):
    if n <= 4:
        return [0, n]
    factorization = []
    hashTable = {}
    keys=[2]
    answer = [0, 0]
    for number in range(4, n+1):
        copy=number
        divisor = 2
        while copy!=1:
            count = 0
            while copy%divisor == 0:
                copy=copy/divisor
                count+=1
            if count > 0:
                factorization.append(count)
            divisor+=1
        total=1
        for power in factorization:
            total*=(1+power)
        if total > 2:
            if total not in hashTable:
                hashTable[total] = 0
                keys.append(total)
            hashTable[total]+=1
        weakness = 0
        index = -1
        while keys[index] > total:
            weakness+=hashTable[keys[index]]
            index-=1
        if weakness > answer[0]:
            answer[0] = weakness
            answer[1] = 1
        elif weakness == answer[0]:
            answer[1]+=1
        factorization = []
      
    return answer

def properNounCorrection(noun):
    noun = noun[0].upper() + noun[1:].lower()
    
    return noun

def isTandemRepeat(inputString):
    concat = inputString[:int(len(inputString)/2)]
    if concat + concat == inputString:
        return True
    return False

def isCaseInsensitivePalindrome(inputString):
    inputString = inputString.lower()
    half = math.floor(len(inputString)/2)
    if len(inputString)%2 == 0:
        if inputString[:half] == inputString[half:len(inputString)][::-1]:
            return True
        else:
            return False
    print(inputString[:half], inputString[half+1:len(inputString)][::-1])   
    if inputString[:half] == inputString[half+1:len(inputString)][::-1]:
        return True
    return False

def stringsConstruction(a, b):
    hashTable = {}
    for letter in a:
        if letter not in hashTable:
            hashTable[letter] = [0, 0]
        hashTable[letter][0]+=1
        
    for element in b:
        if element in hashTable:
            hashTable[element][1]+=1
            
    minNum = math.floor(hashTable[a[0]][1]/hashTable[a[0]][0])
    for values in hashTable.values():
        if values[1]/values[0] < minNum:
            minNum = math.floor(values[1]/values[0])
        
    return minNum

def isSubstitutionCipher(string1, string2):
    hashtable = {}
    value = 0
    code1 = ''
    for letter in string1:
        if letter not in hashtable:
            hashtable[letter] = value
            value += 1
        code1+=str(hashtable[letter])
    hashtable = {}
    value = 0
    code2 = ''    
    for letter in string2:
        if letter not in hashtable:
            hashtable[letter] = value
            value += 1
        code2+=str(hashtable[letter])
    
    if code1 == code2:
        return True
    return False

def createAnagram(s, t):
    for letter in s:
        found = t.find(letter)
        if found != -1:
            t = t[0 : found : ] + t[found + 1 : :]
        
    return len(t)

# This funciton works if the shape of the letters must match the shape of the number

def constructSquare(s):
    hashTable = {}
    largestPossible = math.floor(math.sqrt(int("9"*len(s))))
    largestPossibleSquare=str(largestPossible**2)
    counter = 0
    
    while len(largestPossibleSquare) == len(s) and counter < len(s):
        for index in range(len(s)):
            if s[index] not in hashTable:
                hashTable[s[index]] = largestPossibleSquare[index]
            if hashTable[s[index]] != largestPossibleSquare[index]: 
                largestPossible-=1
                largestPossibleSquare=str(largestPossible**2)
                hashTable = {}
                counter = 0
                break
            else:
                counter+=1
                
    if len(largestPossibleSquare) < len(s):
        return -1
        
    return int(largestPossibleSquare)

# This works if you can re-arrange the letter values 

def constructSquare(s):
    hashTable = {}
    largestPossible = math.floor(math.sqrt(int("9"*len(s))))
    largestPossibleSquare=str(largestPossible**2)
    codeSet = set()
    sequence1 = []
    sequence2 = []
    
    for letter in s:
        if letter not in codeSet:
            codeSet.add(letter)
            sequence1.append(s.count(letter))
        
    sequence1.sort()
    largestPossible+=1
    
    while sequence1 != sequence2:
        codeSet = set()
        sequence2 = []
        largestPossible-=1
        largestPossibleSquare=str(largestPossible**2)
        if len(s) != len(largestPossibleSquare):
            return -1
        for integer in largestPossibleSquare:
            if integer not in codeSet:
                codeSet.add(integer)
                sequence2.append(largestPossibleSquare.count(integer))
        sequence2.sort()    
        
    return int(largestPossibleSquare)

def numbersGrouping(a):
    total = set()

    for num in a:
        addition = math.ceil(num/(10000))
        total.add(addition)
        
    return len(total)+len(a)

def mostFrequentDigitSum(n):
    hashTable = {}
    number = 0
    occorance = 0
    while n > 0:
        summation = 0
        strN = str(n)
        for value in strN:
            summation+=int(value)
        if summation not in hashTable:
            hashTable[summation] = 0
        hashTable[summation] += 1
        if hashTable[summation] == occorance and summation > number:
            number = summation
        if hashTable[summation] > occorance:
            number = summation
            occorance = hashTable[summation]
        n = n-int(summation)
        
    return number

def numberOfClans(divisors, k):
    clans = set()
    for integer in range(1, k+1):
        clanNum = ''
        for divisor in divisors:
            if integer%divisor == 0:
                clanNum+=str(divisor)
        clans.add(clanNum)
            
    return len(clans)

def differentSquares(matrix):
    squares = set()
    coordinates = [[0,0], [0, +1], [+1, 0], [+1, +1]]
    for rowIndex in range(len(matrix)-1):
        for value in range(len(matrix[rowIndex])-1):
            possibleSquare = ''
            for coordinate in coordinates:
                possibleSquare+=str(matrix[rowIndex+coordinate[0]][value+coordinate[1]])
            squares.add(possibleSquare)
    
    return len(squares)

def houseOfCats(legs):
    combinations = []
    people = 0
    if legs == 0:
        return [0]
    if legs%4 == 0:
        combinations.append(people)
    while legs > 4:
        people+=1
        legs-=2
        if legs%4 == 0:
            combinations.append(people)
        
    if legs == 4:
        people+=2
        combinations.append(people)
        return combinations
    
    people+=1
    combinations.append(people)
    return combinations
        
def alphabetSubsequence(s):
    hashTable = {}
    index = 0
    alphabet_string = string.ascii_lowercase
    for letter in alphabet_string:
        hashTable[letter] = index
        index+=1
        
    for elem_index in range(len(s)-1):
        if hashTable[s[elem_index]] >= hashTable[s[elem_index+1]]:
            return False
            
    return True
        
def addBorder(picture):
    picture.insert(0, "*"*len(picture[0]))
    picture.append("*"*len(picture[0]))
    for index in range(len(picture)):
        picture[index] = "*"+picture[index]+"*"
    return picture

def timedReading(maxLength, text):
    alphabet_string = string.ascii_uppercase + string.ascii_lowercase
    alphabet_set = set(alphabet_string)
    word_count = 0
    letter_count = 0
    for letter in text:
        if letter == " ":
            if letter_count <= maxLength:
                word_count+=1
            letter_count = 0
        elif letter in alphabet_set:
            letter_count+=1
            
    if 0 < letter_count <= maxLength:
        word_count+=1
            
    return word_count
        
def areSimilar(a, b):
    list1 = []
    list2 = []
    for index in range(len(a)):
        if a[index] != b[index]:
            list1.append(a[index])
            list2.append(b[index])
            if len(list1) > 2:
                return False
                
    list1.sort()
    list2.sort()
    
    if list1 == list2:
        return True
        
    return False

def higherVersion(ver1, ver2):
    arr1 = []
    arr2 = []
    number = ""
    for element in ver1:
        if element == ".":
            arr1.append(number)
            number = ""
        else:
            number += element
    arr1.append(number)
    number = ""
    for element in ver2:
        if element == ".":
            arr2.append(number)
            number = ""
        else:
            number += element
    arr2.append(number)
    difference = len(arr1) - len(arr2)
    if difference > 0:
        arr2 = arr2 + [0] * difference
    if difference < 0:
        arr1 = arr1 + [0] * abs(difference)
             
    print(arr1, arr2)
    for index in range(len(arr1)):
        num1 = int(arr1[index])
        num2 = int(arr2[index])
        if num1 > num2:
            return True
        if num2 > num1:
            return False
    return False

def pairOfShoes(shoes):
    hashTable = {}
    unpaired = 0
    for shoe in shoes:
        if shoe[0] == 0:
            key = "1" + str(shoe[1])
        else:
            key = "0" + str(shoe[1])
        if key in hashTable and hashTable[key] >= 1:
            hashTable[key] -= 1
            unpaired -= 1
            # print(unpaired)
            # print("1", hashTable)
        else:
            if shoe[0] == 0:
                key = "0" + str(shoe[1])
            else:
                key = "1" + str(shoe[1])
            if key not in hashTable:
                hashTable[key] = 0
            hashTable[key] += 1
            # print("2", hashTable)
            unpaired += 1
            # print(unpaired)
            
    if unpaired > 0:
        return False
    
    return True

def combs(comb1, comb2):
    setComb = set()
    listComb = []
    for index in range(len(comb1)):
        if comb1[index] == "*":
            setComb.add(index)
    for index in range(len(comb2)):
        if comb2[index] == "*":
            listComb.append(index)
    if len(comb1) > len(comb2):
        length = len(comb1)
    else:
        length = len(comb2)
    longest = len(comb1)+len(comb2)
    shift = 0
    tooth = 0
    while tooth < len(comb2)-1:
        for tooth in listComb:
            if (tooth+shift) in setComb:
                shift+=1
                break
    if len(comb1) > len(comb2)+shift:
       return len(comb1)
    return len(comb2)+shift

def findEmailDomain(address):      
    return address[address.rfind("@")+1:len(address)]

def htmlEndTagByStartTag(startTag):
    return "</"+startTag[1:startTag.find(" ")]+">"
    
def stringsCrossover(inputArray, result):
    total = 0
    for string1 in range(len(inputArray)):
        for string2 in range(string1+1, len(inputArray)):
            match = 0
            for index in range(len(result)):
                if result[index] != inputArray[string1][index] and result[index] != inputArray[string2][index]:
                    match = 0
                    break
                else:
                    match+=1
            if match == len(result):
                total+=1
    return total
    
def cipher26(message):
    cypher = {}
    alphabet = string.ascii_lowercase
    for index in range(len(alphabet)):
        cypher[alphabet[index]] = index
        cypher[str(index)] = alphabet[index]
    decoded = message[0]
    lastValue = cypher[message[0]]
    for index in range(1, len(message)):
        currentValue = cypher[message[index]]
        if currentValue < lastValue:
            currentValue+=26
        nextValue = currentValue - lastValue
        decoded+=cypher[str(nextValue)]
        lastValue = currentValue%26
        
    return decoded        
        
def extractMatrixColumn(matrix, column):
    columnList = []
    for row in matrix:
        columnList.append(row[column])
    return columnList

def areIsomorphic(array1, array2):
    if len(array1) != len(array2):
        return False
    for index in range(len(array1)):
        if len(array1[index]) != len(array2[index]):
            return False
    return True

def reverseOnDiagonals(matrix):
    start = 0
    end = len(matrix)-1
    while start < len(matrix)/2:
        matrix[start][start], matrix[end][end] = matrix[end][end], matrix[start][start]
        matrix[start][end], matrix[end][start] = matrix[end][start], matrix[start][end]
        start+=1
        end-=1
    return matrix

def swapDiagonals(matrix):
    start = 0
    end = -1
    for row in matrix:
        row[start], row[end] = row[end], row[start]
        start+=1
        end-=1
    return matrix 

def crossingSum(matrix, a, b):
    total = 0
    for element in matrix[a]:
        total+=element
    for row in range(len(matrix)):
        total+=matrix[row][b]
    total-=(matrix[a][b])
    return total

def drawRectangle(canvas, rectangle):
    side = ["*"] + ["-"]*(rectangle[2] - rectangle[0]-1) + ["*"]
    canvas[rectangle[1]] = canvas[rectangle[1]][0:rectangle[0]] + side + canvas[rectangle[1]][rectangle[2]+1:len(canvas[rectangle[1]])]
    canvas[rectangle[3]] = canvas[rectangle[3]][0:rectangle[0]] + side + canvas[rectangle[3]][rectangle[2]+1:len(canvas[rectangle[3]])]
    for row in range(rectangle[1]+1, rectangle[3]):
        canvas[row][rectangle[0]], canvas[row][rectangle[2]] = "|", "|"
    return canvas 

def volleyballPositions(formation, k):
    k=k%6
    if k==0:
        return formation
    positionsList = [[0, 1], [1, 2], [3, 2], [2, 1], [3, 0], [1, 0]]
    playerList = []
    for position in positionsList:
        playerList.append(formation[position[0]][position[1]])
    playerList = playerList[k: len(playerList)] + playerList[0: k]
    for index in range(len(playerList)):
        formation[positionsList[index][0]][positionsList[index][1]] = playerList[index]
        
    return formation

def sudoku(grid):
    squareCheck = [set(), set(), set()]
    columnCheck = []
    
    for row in range(len(grid)):
        columnCheck.append(set())
        
    for row in range(len(grid)):
        rowSet = set(grid[row])
        if len(rowSet) != 9:
            return(False)
        if row > 0 and row%3 == 0:
            for square in squareCheck:
                if len(square) != 9:
                    return False
            squareCheck = [set(), set(), set()]
        for column in range(len(grid[row])):
            number = grid[row][column]
            if column < 3:
                squareCheck[0].add(number)
            if 2 < column < 6:
                squareCheck[1].add(number)
            if column > 5:
                squareCheck[2].add(number)
            columnCheck[column].add(number)
        rowCheck = set()
        
    for square in squareCheck:
        if len(square) != 9:
            return False
            
    for column in columnCheck:
        if len(column) != 9:
            return False
        
    return True

def minesweeper(matrix):
    checks = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
    newMatrix = []
    for row in matrix:
        newMatrix.append([0]*len(matrix[0]))
    for rowIndex in range(len(matrix)):
        for columnIndex in range(len(matrix[rowIndex])):
            if matrix[rowIndex][columnIndex] == True:
                for check in checks:
                    if 0<=rowIndex+check[0]<len(matrix) and 0<=columnIndex+check[1]<len(matrix[rowIndex]):
                        newMatrix[rowIndex+check[0]][columnIndex+check[1]]+=1

    return newMatrix

def boxBlur(image):
    coordinates = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, -1], [1, 0], [1, 1]]
    blurImage=[]
    values=[]
        
    for rowIndex in range(1, len(image)-1):
        row = []
        for columnIndex in range(1, len(image[rowIndex])-1):
            total=0
            for coordinate in coordinates:
                total+=image[rowIndex+coordinate[0]][columnIndex+coordinate[1]]
                values.append(image[rowIndex+coordinate[0]][columnIndex+coordinate[1]])
            print(total/9)
            total=math.floor(total/9)
            row.append(total)
        blurImage.append(row)
            
        
    return blurImage 

def shuffledArray(shuffled):
    total = 0
    shuffled.sort()
    for number in shuffled:
        total+=number
    for index in range(len(shuffled)):
        if total-shuffled[index] == shuffled[index]:
            return shuffled[0:index] + shuffled[index+1:len(shuffled)]  

def sortByHeight(a):
    indexMap = []
    order = []
    for index in range(len(a)):
        element = a[index]
        if element != -1:
            indexMap.append(index)
            order.append(element)
    order.sort()
    for index in range(len(order)):
        a[indexMap[index]] = order[index]
        
    return a

def sortByLength(inputArray):
    hashTable = {}
    lengths = []
    outputArray = []
    for string in inputArray:
        length = len(string)
        if length not in hashTable:
            hashTable[length] = []
            lengths.append(length)
        hashTable[length].append(string)
    lengths.sort()
    for key in lengths:
        outputArray += hashTable[key]
        
    return outputArray

def maximumSum(a, q):
    mentions = [0]*len(a)
    total = 0
    for pair in q:
        for number in range(pair[0], pair[1]+1):
            mentions[number] += 1
    mentions.sort()
    a.sort()
    mentions.reverse()
    a.reverse()
    index = 0
    while index < len(mentions) and mentions[index] > 0:
        total+=(a[index]*mentions[index])
        index += 1
        
    return total
        
def rowsRearranging(matrix):
    if len(matrix) == 1:
        return True
    hashTable = {}
    keys = []
    for rowIndex in range(len(matrix)):
        key = matrix[rowIndex][0]
        if key in hashTable:
            return False
        hashTable[key] = matrix[rowIndex]
        keys.append(key)
    keys.sort()
    for column in range(1, len(matrix[0])):
        lastNum = hashTable[keys[0]][column]
        for keyIndex in range(1, len(keys)):
            nextNum = hashTable[keys[keyIndex]][column]
            if lastNum >= nextNum:
                return False
            lastNum = nextNum
    return True

def digitDifferenceSort(a):
    hashTable = {}
    keys = []
    array = []
    for number in a:
        stringNum = str(number)
        if len(stringNum) == 1:
            if 0 not in hashTable:
                hashTable[0] = []
                keys.append(0)
            hashTable[0] = [number] + hashTable[0]
        else:
            largest = int(stringNum[0])
            smallest = int(stringNum[0])
            for element in stringNum:
                intNum = int(element)
                if intNum > largest:
                    largest = intNum
                if intNum < smallest:
                    smallest = intNum
            difference = largest-smallest
            if difference not in hashTable:
                hashTable[difference] = []
                keys.append(difference)
            hashTable[difference] = [number] + hashTable[difference] 
        keys.sort()
    for key in keys:
        array = array + hashTable[key]
               
    return array

def uniqueDigitProducts(a):
    aSet = set()
    for number in a:
        stringNum = str(number)
        if len(stringNum) == 1:
            aSet.add(number)
        else:
            total = 1
            for digit in stringNum:
                total*=int(digit)
            aSet.add(total)
    return len(aSet)