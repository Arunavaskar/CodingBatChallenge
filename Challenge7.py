def near_hundred(n):
    # return n>=10 or n<=200
    return ((abs(100 - n) <= 10) or (abs(200 - n) <= 10))

print(near_hundred(89))



#(n >= 90 or n <= 100) or (n >= 190 or n <= 200)