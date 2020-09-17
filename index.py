# def sortByHeight(a):
#     heights = []
#     tree_trakcer_index = set()
    
#     for number in range(0, len(a)):
#         if a[number] == -1:
#             tree_trakcer_index.add(number)
#         else:
#             heights.append(a[number])
            
#     final = []
#     heights.sort()
            
#     for num in range(0, len(a)):
#         if num in tree_trakcer_index:
#             final.append(-1)
#         else:
#             final.append(heights.pop(0))
            
#     return final

# def reverseInParentheses(inputString):
#     final_string = []
    
    # hash_table = {}
    
    # index = 0
    # depth = 0
    # max_depth = 0
    # while index < len(inputString):
    #     if inputString[index] == "(" or inputString[index] == ")":
    #         if inputString[index] == "(":
    #             depth += 1
    #             if depth > max_depth:
    #                 max_depth = depth
    #         if depth in hash_table:
    #             hash_table[depth].append(index)
    #         else:
    #             hash_table[depth] = []
    #             hash_table[depth].append(index)
    #         if inputString[index] == ")":
    #             depth -= 1
    #     index += 1
        
    # print(hash_table)
    
    # while max_depth != 0:
    #     while len(hash_table[max_depth]) > 0:      
    #         index2 = int(hash_table[max_depth].pop())
    #         index1 = int(hash_table[max_depth].pop())
    #         str = inputString[index1: index2]
    #         reverse_str = ''.join(reversed(str)) 
    #         reverse_pointer = 0
    #         inputString = inputString[:index1] + reverse_str + inputString[index2:]
    #         reverse_pointer += 1
    #     max_depth -= 1
        
    # inputString = inputString.replace('(', '')
    # inputString = inputString.replace(')', '')
    
    # print(inputString)
    # return inputString

# def alternatingSums(a):
#     team1 = 0
#     team2 = 0
#     for num in range(0, len(a)):
#         if num == 0 or num%2 == 0:
#             team1 = team1 + a[num]
#         elif num%2 == 1:
#             team2 = team2 + a[num]
            
#     return[team1, team2]

# def addBorder(picture):
#     length = len(picture[0])
#     frame = "*" * length
    
#     picture.insert(0, frame)
#     picture.append(frame)
    
#     framed_picture =[]
    
#     for line in picture:
#         add_frame = "*"+line+"*"
#         framed_picture.append(add_frame)
        
#     return framed_picture

# def areSimilar(a, b):
#     similar = True
#     list1 = []
#     list2 = []
#     for num in range(0, len(a)):
#         if a[num] != b[num]:
#             list1.append(a[num])
#             list2.append(b[num])
#             if len(list1) > 2:
#                 similar = False
#                 break
    
#     list1.sort()
#     list2.sort()
    
#     if list1 != list2:
#         similar = False
            
#     return similar  

# def arrayChange(inputArray):
#     count = 0
#     for num in range(1, len(inputArray)):
#         if inputArray[num-1] >= inputArray[num]:
#             old_num = inputArray[num]
#             inputArray[num] = inputArray[num-1] + 1
#             difference = inputArray[num] - old_num
#             count = count + difference
#     return count      

# def palindromeRearranging(inputString):
#     hash_table = {}
    
#     for letter in inputString:
#         if letter in hash_table:
#             hash_table[letter] += 1
#         else:
#             hash_table[letter] = 1
            
#     exemption = 0
#     can_rearrange = True
            
#     for value in hash_table.values():
#         if value == 1 or value%2 == 1:
#             exemption += 1
#             if exemption > 1:
#                 can_rearrange = False
#                 break
                
#     return can_rearrange

# def areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight):
#     equallyStrong = False
#     you = []
#     freind = []
#     if yourLeft > yourRight:
#         you.append(yourLeft)
#         you.append(yourRight)
#     else:
#         you.append(yourRight)
#         you.append(yourLeft)
    
#     if friendsLeft > friendsRight:
#         freind.append(friendsLeft)
#         freind.append(friendsRight)
#     else:
#         freind.append(friendsRight)
#         freind.append(friendsLeft)
    
#     if you[0] == freind[0] and you[1] == freind[1]:
#         equallyStrong = True
    
#     return equallyStrong

# def arrayMaximalAdjacentDifference(inputArray):
#     max_distance = 0
#     for num in range(0, len(inputArray)-1):
#         difference = abs(inputArray[num] - inputArray[num+1])
#         if difference > max_distance:
#             max_distance = difference
    
#     return max_distance

# import re

# def isIPv4Address(inputString):
    
#     letter = re.search("[a-zA-Z]", inputString)
#     special = re.search("[+]", inputString)
    
#     if letter != None or special != None:
#         print(letter)
#         print(special)
#         print("fail1")
#         return False
    
#     count = 0
        
#     for char in inputString:
#         if char == ".":
#             count += 1
            
#     if count != 3:
#         return False
            
#     IParray = inputString.replace(".", " ")
#     IParray = IParray.split()
    
#     if len(IParray) != 4:
#         print("fail2")
#         return False
    
#     print(IParray)
        
#     for num in IParray:
#         if str(int(num)) != num or int(num) > 255:
#             print("fail3")
#             return False
            
#     return True


# def avoidObstacles(inputArray):
    
#     inputArray.sort()
#     arraySet = set(inputArray)

#     longest_jump = 1

#     while longest_jump in arraySet:
#         longest_jump += 1

#     jump_point = longest_jump
#     changed = False
#     additional = 0
    
#     while jump_point < inputArray[-1]:
#         jump_point = jump_point + longest_jump
#         while jump_point in arraySet:
#             changed = True
#             additional += 1
#             jump_point += 1
#         if changed == True:
#             longest_jump = longest_jump + additional
#             additional = 0
#             while longest_jump in arraySet:
#                 longest_jump += 1
#             jump_point = longest_jump
#             changed = False
                
#     return longest_jump

# def boxBlur(image):
#     def getSum(row, column):
#         surroundings = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, -1], [1, 0], [1, 1]]
#         total = 0
#         for coordinate in surroundings:
#             total = total + image[row + coordinate[0]][column + coordinate[1]]
#         total = total/9
#         return math.floor(total)
        
#     blurredImage = []
#     index = -1
              
#     for row in range(1, len(image)-1):
#         blurredImage.append([])
#         index += 1
#         for column in range(1, len(image[row])-1):
#             value = getSum(row, column)
#             blurredImage[index].append(value)
            
#     return blurredImage

# def minesweeper(matrix):
#     def getSum(row, column):
#         surroundings = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
#         total = 0
#         for coordinate in surroundings:
#             if 0 <= row + coordinate[0] < len(matrix) and 0 <= column + coordinate[1] < len(matrix[row]):
#                 if matrix[row + coordinate[0]][column + coordinate[1]] == True:
#                     total+=1
#         return total
              
#     mineMatrix = []
#     index = -1
    
#     for row in range(0, len(matrix)):
#         mineMatrix.append([])
#         index += 1
#         for column in range(0, len(matrix[row])):
#             value = getSum(row, column)
#             mineMatrix[index].append(value)
         
#     return mineMatrix

# def arrayReplace(inputArray, elemToReplace, substitutionElem):
#     for index in range(0, len(inputArray)):
#         if inputArray[index] == elemToReplace:
#             inputArray[index] = substitutionElem
            
#     return inputArray

# def evenDigitsOnly(n):
#     even = True
#     strN = str(n)
#     for digit in strN:
#         if int(digit)%2 == 1:
#             even = False
#             break
            
#     return even

# import re

# def variableName(name):
#     startsWith = re.search("^[a-zA-Z]", name)
#     if startsWith == None:
#         startsWith = re.search("_", name)
#         if startsWith == None:
#             return False
    
#     for char in name:    
#         match = re.search("[a-zA-Z]", char)
#         if match == None:
#             match = re.search("_", char)
#             if match == None:
#                 match = re.search("[0-9]", char)
#                 if match == None:
#                     return False

#     return True

# def alphabeticShift(inputString):
#     alphabet_hash = {}
#     alphabet_string_keys = string.ascii_lowercase
#     alphabet_string_values = alphabet_string_keys + 'a'
#     for index in range(0, 26):
#         alphabet_hash[alphabet_string_keys[index]] = alphabet_string_values[index + 1]
    
#     inputList = list(inputString)
        
#     for index in range(0, len(inputList)):
#         if inputList[index] in alphabet_hash:
#             inputList[index] = alphabet_hash[inputList[index]]

#     outputString = "".join(inputList)
    
#     return outputString

# def chessBoardCellColor(cell1, cell2):
#     color1 = ''
#     color2 = ''
#     alphabet_hash = {
#         "A":1,
#         "B":2,
#         "C":3,
#         "D":4,
#         "E":5,
#         "F":6,
#         "G":7,
#         "H":8
#     }
#     coord1 = alphabet_hash[cell1[0]]
#     coord2 = alphabet_hash[cell2[0]]
    
#     if int(cell1[1])%2 == 0:
#         if int(coord1)%2 == 0:
#             color1 = "Black"
#         else:
#             color1 = "White"
#     else:
#         if int(coord1)%2 != 0:
#             color1 = "Black"
#         else:
#             color1 = "White"
            
#     if int(cell2[1])%2 == 0:
#         if int(coord2)%2 == 0:
#             color2 = "Black"
#         else:
#             color2 = "White"
#     else:
#         if int(coord2)%2 != 0:
#             color2 = "Black"
#         else:
#             color2 = "White"
            
#     if color1 == color2:
#         return True
#     else:
#         return False

# def circleOfNumbers(n, firstNumber):
#     halfway = n/2
#     number = firstNumber+ halfway
    
#     if number < n:
#         return number
#     else:
#         number = number - n
#         return number

# def depositProfit(deposit, rate, threshold):
#     difference = threshold - deposit
#     amount = deposit
#     rate = rate/100
#     interest = 1 + rate
#     periods = 0
#     while amount < threshold:
#         amount = amount * interest
#         periods += 1
        
#     return periods

# def absoluteValuesSumMinimization(a):
#     lowest_value = 0
#     value = 0
#     for num1 in range(0, len(a)):
#         total = 0
#         for num2 in range(0, len(a)):
#             difference = abs(a[num1] - a[num2])
#             total = total + difference
#             if num2 == len(a)-1:
#                 if num1 == 0:
#                     lowest_value = total
#                     value = a[num1]
#                 if total < lowest_value:
#                     lowest_value = total
#                     value = a[num1]
#                 if total == lowest_value and a[num1] < value:
#                     value = a[num1]
    
#     return value

# def extractEachKth(inputArray, k):
#     popList = []
#     popNum = k
#     while popNum <= len(inputArray):
#         popList.append(popNum)
#         popNum += k
        
#     popList.reverse()
        
#     for num in popList:
#         inputArray.pop(num-1)
    
#     return inputArray

# import re

# def firstDigit(inputString):
#     for char in inputString:
#         x = re.search("[0-9]", char)
#         if x:
#             return char

# def differentSymbolsNaive(s):
#     letterSet = set()
#     for letter in s:
#         letterSet.add(letter)
        
#     return len(letterSet)

# def arrayMaxConsecutiveSum(inputArray, k):

#     end = 0
#     indexSum = 0
#     start = 0
    
#     for index in range(0, k):
#         indexSum = indexSum + inputArray[index] 
#         end += 1
            
#     largestNum = indexSum
    
#     while end < len(inputArray):
#         indexSum = indexSum + inputArray[end]
#         indexSum = indexSum - inputArray[start]
#         if indexSum > largestNum:
#             largestNum = indexSum
#         end += 1
#         start += 1
        
#     return largestNum

# def growingPlant(upSpeed, downSpeed, desiredHeight):
#     if upSpeed > desiredHeight:
#         return 1
#     growthAmount = desiredHeight - upSpeed 
#     dailyGrowth = upSpeed - downSpeed
#     days = math.ceil(growthAmount/dailyGrowth) + 1
    
#     return days

# def knapsackLight(value1, weight1, value2, weight2, maxW):
#     total = weight1 + weight2
#     if total <= maxW:
#         return value1 + value2
        
#     if value1 > value2 and weight1 <= maxW:
#         return value1
        
#     if weight2 <= maxW:
#         return value2
        
#     if weight1 <= maxW:
#         return value1
        
#     return 0

# def longestDigitsPrefix(inputString):
#     string = ""
#     for char in inputString:
#         try:
#             num = int(char)
#         except ValueError:
#             return string
#         string = string + char
        
#     return string

# def stringsRearrangement(inputArray):
#     hash_table = {}
    
#     for index1 in range(0, len(inputArray)):
#         hash_table[inputArray[index1]] = []
#         for index2 in range(0, len(inputArray)):
#             differ = 0
#             for index3 in range(0, len(inputArray[index1])):
#                 if index1 != index2:
#                     if inputArray[index1][index3] != inputArray[index2][index3]:
#                         differ += 1
#                     if index3 == len(inputArray[index1])-1 and differ == 1:
#                         hash_table[inputArray[index1]].append(inputArray[index2])
                        
#     # print(hash_table)
                    
#     for key, value in hash_table.items():
#         if len(value) == 0:
#             return False
            
#     letterSet = {inputArray[0]}
    
#     stack = [inputArray[0]]
    
#     while len(stack) > 0:
#         if stack[0] in hash_table:
#             for value in hash_table[stack[0]]:
#                 letterSet.add(value)
#                 stack.append(value)
#             hash_table.pop(stack[0])
#         stack.pop(0)
    
#     print(letterSet)
    
#     if len(letterSet) == len(inputArray):
#         return True
    
#     return False

# def digitDegree(n):
#     count = 0
#     num = n
#     while len(str(num)) != 1:
#         total = 0
#         for num in str(num):
#             total = total + int(num)
#         num = total
#         count += 1
        
#     return count

# def stringsRearrangement(inputArray):
#     hash_table = {}
    
#     for index1 in range(0, len(inputArray)):
#         hash_table[inputArray[index1]] = []
#         for index2 in range(0, len(inputArray)):
#             differ = 0
#             for index3 in range(0, len(inputArray[index1])):
#                 if index1 != index2:
#                     if inputArray[index1][index3] != inputArray[index2][index3]:
#                         differ += 1
#                     if index3 == len(inputArray[index1])-1 and differ == 1:
#                         hash_table[inputArray[index1]].append(inputArray[index2])
                                            
#     for key, value in hash_table.items():
#         if len(value) == 0:
#             return False
            
#     letterSet = {inputArray[0]}
    
#     stack = [inputArray[0]]
    
#     while len(stack) > 0:
#         if stack[0] in hash_table:
#             for value in hash_table[stack[0]]:
#                 letterSet.add(value)
#                 stack.append(value)
#             hash_table.pop(stack[0])
#         stack.pop(0)
        
#     if len(letterSet) == len(inputArray):
#         return True
    
#     return False

# import itertools

# def stringsRearrangement(inputArray):
#     permutations_object = itertools.permutations(inputArray)
#     permutations_list = list(permutations_object)
    
#     iteration = 0

#     while iteration < len(permutations_list):
#         oneLetterChange = 0
#         for word in range(0, len(permutations_list[iteration])-1):
#             difference = 0
#             for letter in range(0, len(permutations_list[iteration][word])):
#                 if permutations_list[iteration][word][letter] != permutations_list[iteration][word+1][letter]:
#                     difference += 1
#             if difference == 1:
#                 oneLetterChange += 1
#             else:
#                 iteration += 1
#                 break
#         if oneLetterChange == len(inputArray)-1:
#             return True
                
#     return False

# def bishopAndPawn(bishop, pawn):
#     if bishop[0] == pawn[0] or bishop[1] == pawn[1]:
#         return False
        
#     directions = []
#     hash_table = {
#         "a": 0,
#         "b": 1,
#         "c": 2,
#         "d": 3,
#         "e": 4,
#         "f": 5,
#         "g": 6,
#         "h": 7
#     }
#     movement = ["a", "b", "c", "d", "e", "f", "g", "h"]
    
#     if bishop[0] > pawn[0]:
#         directions.append(-1)
#     else:
#         directions.append(1)
        
#     if int(bishop[1]) > int(pawn[1]):
#         directions.append(-1)
#     else:
#         directions.append(1)
        
#     while 0 < int(bishop[1]) <= 8:
#         print(bishop)
#         index = hash_table[bishop[0]] + directions[0] 
#         bishop = movement[index] + bishop[1]
#         bishop = bishop[0] + str(int(bishop[1]) + directions[1]) 
#         if bishop == pawn:
#             return True
#         if bishop[0] == "a" or bishop[0] == "h":
#             return False
        
#     return False

# def isBeautifulString(inputString):
    
#     sorted_characters = sorted(inputString)
#     sortedString = "". join(sorted_characters)
    
#     hash_table = {}
#     lastLetter = sortedString[-1] 
#     alphabet = string.ascii_lowercase
#     letterList = []
    
#     for letter in alphabet:
#         if letter != lastLetter:
#             letterList.append(letter)
#         else:
#             letterList.append(letter)
#             break
    
#     for letter in sortedString:
#         if letter in hash_table:
#             hash_table[letter] += 1
#         else:
#             hash_table[letter] = 1
            
#     for index in range(0, len(letterList)-1):
#         print(letterList[index])
#         if letterList[index] not in hash_table:
#             return False
#         if letterList[index + 1] in hash_table:
#             if hash_table[letterList[index]] < hash_table[letterList[index+1]]:
#                 return False
            
#     return True
            
# def findEmailDomain(address):
#     addressList = address.split("@")
#     return addressList[-1]

# def electionsWinners(votes, k):
#     current_winner = 0
#     tie = False
    
#     for vote in votes:
#         if vote == current_winner:
#             tie = True
#         if vote > current_winner:
#             current_winner = vote
#             tie = False
            
#     if k == 0:
#         print(tie)
#         if tie == False:
#             return 1
#         if tie == True:
#             return 0
    
#     potential_winners = 0
#     for vote in votes:
#         if vote+k > current_winner:
#             potential_winners += 1
            
#     return potential_winners

# def buildPalindrome(st):
#     index = math.floor(len(st)/2)
#     pointer1 = index-1
#     pointer2 = index+1
    
#     while 0 <= pointer1 and pointer2 < len(st)-1:
#         if st[pointer1] == st[pointer2]:
#             pointer1 -= 1
#             pointer2 += 1
#         else:
#             index += 1
#             pointer1 = index-1
#             pointer2 = index+1
                    
#     if index == len(st)-2 and st[pointer1] != st[pointer2]:
#         if st[index] != st[pointer2]:
#             pointer1 = index
#     elif st[pointer1] == st[pointer2]:
#         pointer1 -= 1
    
#     while pointer1 >= 0:
#         first_half = st[0: int(math.floor(len(st)/2))]
#         second_half = st[int(math.ceil(len(st)/2)): len(st)]
#         reverse = second_half[::-1]
#         if first_half == reverse:
#             return st
#         st = st + st[pointer1]
#         pointer1 -= 1
    
#     return st

# import re

# def isMAC48Address(inputString):
#     inputList = inputString.split("-")
    
#     if len(inputList) != 6:
#         return False
    
#     for group in inputList:
#         if len(group) != 2:
#             return False
#         for char in group:
#             if re.search("[0-9]|[A-F]", char) == None:
#                 return False
                
#     return True

# import re 

# def isDigit(symbol):
#     if re.search("[0-9]", symbol) == None:
#         return False
        
#     return True

# def lineEncoding(s):
    
#     coded = ""
#     currentChar = s[0]
#     count = 0
    
#     for index in range(0, len(s)):
#         if s[index] == currentChar:
#             count += 1
#         else:
#             if count > 1:
#                 coded = coded + str(count) + currentChar
#             else:
#                 coded = coded + currentChar
#             currentChar = s[index]
#             count = 1 
            
#         if index == len(s)-1:
#             if count > 1:
#                 coded = coded + str(count) + currentChar
#             else:
#                 coded = coded + currentChar
            
#     return coded

def deleteDigit(n):
    numStr = str(n)
    highestNum = 0
    
    for index in range(0, len(numStr)):
        replace = int(numStr.replace(numStr[index], '', 1))
        if replace > highestNum:
            highestNum = replace
                
    return highestNum