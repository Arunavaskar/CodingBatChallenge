function array_front9(nums){
  var result;
  if (nums.length < 4) {
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] == 9) {
        result = true;break;
      }
       else {
         result = false;continue;
       }
    }
  }
  else {
    var num4 = nums.splice(0,4);
    for (var i = 0; i < num4.length; i++) {
      if (num4[i] == 9) {
        result = true;break;
      }
      else {
        result = false;continue;
      }
    }
  }
  return result;
}

https://gist.github.com/Arunavaskar/8c5e2f286a58b05dd3cdb5f9267ab0e8
