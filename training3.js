function negative_Positive(nums){
    let negative = []
    let positive = []
    for(let i = 0;i < nums.length;i++){
        if(nums[i] > 0){
            positive.push(nums[i])}
        else{
            negative.push(nums[i])
        }
    }
    return negative , positive
}
console.log(negative_Positive([1,2,-5,-10,4,3,11,-400,20 ]))