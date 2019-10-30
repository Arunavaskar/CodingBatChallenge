def front_back(str):
    if len(str) <= 1:
        return str
    # elif len(str) >= 3:
    return str[-1] + str[1:-1] + str[0]
    # elif len(str) == 2:
    #     return str[-1] + str[0]
print(front_back("ab"))