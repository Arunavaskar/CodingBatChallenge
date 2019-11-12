function last(str){
    var index = 0;
    var last =  str.slice(-2,);
    var count = 0;
    var length = str.length-2;

    while (length != index){
        if (last == str.slice(index,index+2)){
            count +=1;
          }
        index +=1
    }
    console.log(count);
}
