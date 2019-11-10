//peudo code!!

//Return n copies of the string if length.str < 3
// or
// grab first 3 charecters from the string and return n copies of it
function front_times(str, n){
  if (str.length < 3) {
    return str*n
  }
  else {
    var count = 0;
    var newstr = '';
    while (count != 3) {
      newstr += str[count]
      count ++;
    }
    var count2 = 0;
    var newstr2 = '';
    while (count2 != n) {
      newstr2 += newstr
      count2++
    }
    return newstr2
  }
}
