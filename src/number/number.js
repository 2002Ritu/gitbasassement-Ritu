let missing =function(req,res){

let arr =[1,2,3,5,6,7]
let totalSum = 0
for( let i in arr){
    totalSum+= arr[i]
}
//console.log(totalSum)

let lastDigit= arr.pop()
   let consecutiveSum= lastDigit * (lastDigit+1) / 2
   let missingNumber= consecutiveSum - totalSum
//console.log(missingNumber)
res.send({missingNumber})
}

let missingTwo =function(req,res){

let arr= [33, 34, 35, 37, 38]
   let len= arr.length
 
   let total = 0;
   for (var i in arr) {
       total += arr[i];
   }
 
   let firstDigit= arr[0]
   let lastDigit= arr.pop()
   let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
   let missingNumber= consecutiveSum - total
   res.send({missingNumber})
}

   module.exports.missing=missing

   module.exports.missingTwo=missingTwo