# Find all the pairs of two integers in an unsorted array that sum up to a given S. For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7

#brute force equation all solutions, On^2
#pairs of 2 if statement 11 append it to the list

def all_pairs(array, target):
    
    #do it with pointers

    sums = []

    pointer = 0
    for num1 in range(0, len(array)):
        for num2 in range(pointer, len(array)):
            if array[num1] + array[num2] == target:
                values = [array[num1], array[num2]]
                sums.append(values)
        pointer += 1

    return sums

array1 = [3, 5, 2, -4, 8, 11]

print(all_pairs(array1, 7))