def front_times(str, n):
  front = str[0:3]
  if len(str) < 3:
    return str*n
  return front*n
