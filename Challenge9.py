def not_string(str):
  if (str[0] + str[1] + str[2] == "not"):
     return str
    
  else:
     return 'not ' + str
    
print(not_string("string"))