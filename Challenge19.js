function array_front9(nums){
  //if length of nums is equal to or greater than 4
  if (nums.length >= 4) {
    //store first 4 items of nums in variable
    var numslice = nums.slice(0,4);
    //and check each item from that
    for (var i = 0; i < numslice.length; i++) {
      // if is 9 or not and then return
      if (i == 9){
        return i == 9
      }
    return i == 9
    }
  }

  // else:
  // for i in nums:
  //     if i == 9:
  //         return i == 9
  // return i == 9
}
