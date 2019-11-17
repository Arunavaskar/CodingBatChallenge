def array_front9(nums):
    #if length of nums is 4 or more
    if len(nums) >= 4:
        #for i in the 4 length of nums
        for i in nums[0:4]:
            #check if each number is 9 or not and then return!
            if i == 9:
                return i == 9
        return i == 9
    else:
        for i in nums:
            if i == 9:
                return i == 9
        return i == 9
print(array_front9([1, 2, 3, 4, 5]))
