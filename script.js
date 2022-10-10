const foods_slice = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let modifiedFood = foods_slice.slice(1,4);
console.log("Array Slice  Output :");
console.log(modifiedFood);




const foods_splice = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];
foods_splice.splice(2,0,"noodles", "icecream");
console.log("Array Splice  Output :");
console.log(foods_splice); 







console.log("Filter Output :");
const numberArray = [12,324,213,4,2,3,45,4234];
function isEven(n)
{
    return n%2==0;
}
function isPrime(n)
{
    let i=1,count=0;
    if(n==1)
    {
        return count=2;
    }
    else{
    while(i<=n)
    {
        if(n%i==0)
        {
            count++;
        }
        i++;
    }
    }
    if(count==2)
    {
        return true;
    }
    return false;
}

let num1=numberArray.filter(function(val)
{
    return isEven(val);
});
console.log("Even Number :",num1)
// console.log(num1);
let num2 =numberArray.filter(function(val)
{
    return isPrime(val);
});
console.log("Prime Number :",num2)
// console.log(num2);







console.log("Reject Output :");
let num3 =numberArray.filter(function(val)
{
    return !(isEven(val));
});
console.log("Odd Number :",num3)
// console.log(num3);
let num4 =numberArray.filter(function(val)
{
    return !(isPrime(val));
});
console.log("Non-Prime Number :",num4)
// console.log(num4);








console.log("Map Output :");
const myArray = [11, 34, 20, 5, 53, 16];
let arr = myArray.map(function(val)
{
    return val*val;
});
console.log(arr);








console.log("Reduce Output :");
const arr1=[2, 3, 5, 10];
function multiply(num1,num2)
{
    return num1*num2;
}
const num5 = arr1.reduce((num1,num2)=>{return multiply(num1,num2)},2);
console.log(num5);