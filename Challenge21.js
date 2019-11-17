function string_match(a, b){
 var count = 0; var asub = ''; var bsub = '';
  for (var i = 0; i < a.length-1; i++){
    asub = a.slice(i, i+2);
    bsub = b.slice(i, i+2);
    if (asub == bsub){
      count = count +1
    }
}return count}
