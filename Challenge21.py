def string_match(a, b):
  count = 0
  asub = ''
  bsub = ''
  for i in range(len(a)-1):
    asub = a[i: i+2]
    bsub = b[i: i+2]
    if asub == bsub:
       count = count +1
  return count
