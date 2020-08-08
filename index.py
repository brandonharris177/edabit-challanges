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
        