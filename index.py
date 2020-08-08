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


        