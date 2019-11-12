def last(str):
    index = 0
    last =  str[-2:]
    count = 0
    length = len(str)-2

    while length != index:
        if last == str[index:index+2]:
            count +=1
        index +=1
    print(count)
