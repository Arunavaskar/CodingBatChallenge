function array_count9(nums){
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == 9) {
      count+=1;
    }
  } return count
}
/////////////////////
array_count9([1, 9, 9, 3, 9])
