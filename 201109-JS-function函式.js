//函式 // 使用JSFiddle測試
function square(number){
    return number*number
}
function noReturn(){
}
// 可以將回傳值存到一個變數
var squareValue = square(10);
console.log(squareValue); // 100
console.log(square(10)*10); // 1000
console.log(noReturn()); // undefined
