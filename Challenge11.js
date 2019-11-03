// Given a string, return a new string where the first and last chars have been exchanged.
//
//
// front_back('code') → 'eodc'
// front_back('a') → 'a'
// front_back('ab') → 'ba'

//python code
// def front_back(str):
//   if len(str) <= 1:
//       return str
//   # elif len(str) >= 3:
//   return str[-1] + str[1:-1] + str[0]
//   # elif len(str) == 2:
//   #     return str[-1] + str[0]



function front_back(str){
  //covers if str is "" or "a"
  if (str.length <= 1){
      return str
    }
  else if (str.length == 2)
  {
    return str[str.length -1] + str[0]
  }
  return str[str.length -1] + str.slice(1,str.length - 1) +str[0]
}
