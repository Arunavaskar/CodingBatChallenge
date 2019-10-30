def missing_char(str, n):
     first = str[:n] #from index number o to but not including n
     second = str[n+1:] #starting just after index n(n+1) till last index
     return first + second

print(missing_char("asshole",4))