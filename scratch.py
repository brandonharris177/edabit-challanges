def numKeypadSolutions(wordlist, keypads):
    # Write your code here
    hashTable = {}
    solution = [0]*len(keypads)
    for word in wordlist:
        wordList = list(set(list(word)))
        wordList.sort()
        str1 = ""  
        for ele in wordList:  
            str1 += ele
        if str1 not in hashTable:
            hashTable[str1]=0
        hashTable[str1]+=1
        
    print(hashTable)
        
    for key, value in hashTable.items():
        for index in range(len(keypads)):
            keyList = list(key)
            keypadList = list(keypads[index])
            if all(elem in keypadList for elem in keyList) and keypadList[0] in keyList:
                solution[index]+=value
                
    return solution