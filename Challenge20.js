function array123(nums){
  var count = 0;
  var length = (nums.length);
   while (count != length) {
     if (1 == nums[count] && 2 == nums[count+1] && 3 == nums[count+2]) {
       return true
     }
    count = count + 1;
   }
}
