//Binary search in while loop
var search = function(nums, target) {
    let low = 0;
    let high = nums.length ;
    let mid;

    if(high === low + 1){
        if (target == nums[low]){
            return low
        }else {
            return -1
        }
    }

    while(low <= high){
        mid = (low + high) / 2;
        if(target === nums[mid]){
            return mid;
        }
        if(target > nums[mid]){
            low = mid + 1;
        }else {
            high = mid - 1;
        }
    }

    return -1;
};

//Binary search in recursion