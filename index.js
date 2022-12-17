let params=[2,3,4];
function calculatetotal(num1,num2,num3){
    return num1+num2+num3;
}
console.log("total=" + calculatetotal(...params));
