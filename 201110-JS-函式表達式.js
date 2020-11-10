// 函式表達式 // 呼叫時機一定要在宣告之後
greet(); // NG
var greet =function(){ // 使用函式表達式宣告
    console.log("Hi");
}
greet(); // OK

// 一般表達式
greet(); // OK
function greet(){ // 使用函式表達式宣告
    console.log("Hi");
}
greet(); // OK
