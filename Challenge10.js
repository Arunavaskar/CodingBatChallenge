function missing_char(str, n){
  var first = str.slice(0,n)

  var length_str = str.length
  var second = str.slice(n+1, length_str)

  return first + second
}
