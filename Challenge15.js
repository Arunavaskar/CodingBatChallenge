// Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".
//
//
// string_bits('Hello') → 'Hlo'
// string_bits('Hi') → 'H'
// string_bits('Heeololeo') → 'Hello'
//
function string_bits(str){
  var newstr = "";
  var count = 0;
  len = str.length;
  while (count != len) {
    if (count%2 == 0) {
      newstr += str[count];
    }
    count++;
  }
  return newstr
}
string_bits("Hello")
