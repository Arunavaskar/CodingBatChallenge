function front_back(str){
  if (str.length <= 1){
      return str}
  return str.substr(str.length) + str.substr(1,str.length) + str.substr(0)
}
