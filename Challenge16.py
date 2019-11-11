def string_splosion(str):
    count = 1
    newstr = ''
    # s = ''
    while count <= len(str):
        newstr += str[0:count]
        count += 1
    return newstr
