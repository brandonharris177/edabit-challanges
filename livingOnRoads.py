def livingOnTheRoads(roadRegister):
    hashTable = {}
    names = {}
    nameKeys = []
    connected = []
    drop = []
    for city in range(len(roadRegister)):
        hashTable[city] = []
        for road in range(len(roadRegister[city])):
            if roadRegister[city][road] == True:
                hashTable[city].append(road)
                if road in hashTable and city in hashTable[road]:
                    connected.append([road, city])
                    if road not in names:
                        names[road] = []
                    names[road].append(city)
                    nameKeys.append(road)
                    drop.append(road)
                    drop.append(city)
    
    for pair in connected:
        name = str(pair[0]) + " " + str(pair[1])
        hashTable[name] = list(set(hashTable[pair[0]] + hashTable[pair[1]]))    
    
    drop = set(drop)  
    
    for city in drop:
        hashTable.pop(city, None)
    
    for key in hashTable.keys():
        if type(key) == int:
            names[key] = []
            nameKeys.append(key)
            
    nameKeys = list(set(nameKeys))
    
    name = 0 
    nameList = []     
    for key in nameKeys:
        if len(names[key]) > 0:
            for value in names[key]:
                nameList.append([name, key, value])
                name += 1
        else: 
            nameList.append([name, key, key])
            name += 1
            
    print(hashTable)
    print(nameList)
    print(connected)
    
    
    # hashTable2 = {}
    
    # for name in nameList:
    #     hashTable2[name[0]] = hashTable[str(name[1]) + " " + str(name[2])]
        
    # print(hashTable2)
            
    # newRegister = []
    # for index in range(length):
    #     cities = [False]*length
    #     newRegister.append(cities)
    
    # for key in range(length):
    #     for value in hashTable[key]:
    #         newRegister[key][value] = True   
               
    return hashTable

######################################################################################################

 