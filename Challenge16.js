function string_splosion(str){
var count = 1;
var newstr = '';
while (count <= str.length){
  newstr += str.slice(0,count);
  count += 1;
  }
return newstr;
}
