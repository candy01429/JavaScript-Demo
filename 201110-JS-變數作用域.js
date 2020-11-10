// 變數作用域 // 使用JSFiddle測試
// sample1
function foo() {
    var abc = 'Jim'; // 區域變數
    console.log(abc); // 顯示Jim
}
foo();
console.log(abc); // 會發生錯誤,因為找不到變數

// sample2
var def = 'Jim'; // 全域變數
function foo1() {
    console.log(def); // 顯示Jim
}
foo1();
console.log(def); // 顯示Jim

// sample3
// 全域變數
var num1 = 20;
var num2 = 3;
var name = 'Jim';

function multiply() {
    return num1 * num2;
}
// 輸出60
console.log(multiply());

// sample4
function getScore() {
    // 區域變數
    // 作用範圍只在函式內部
    var num1 = 2;
    var num3 = 4;

    // 宣告變數無 var,為全域變數
    num2 = 5; // 使用全域變數 num2
    num4 = 6; // 宣告新的全域變數 num4

    // 巢狀函式(nested function)
    function add() {
        // 內部函式可以存取到外部函式的區域變數
        return name + 'scored' + (num1 + num2 + num3);
    }
    return add();
}

console.log(getScore()); // Jim score 11

// 全域變數 num1，輸出20
console.log(num1);

// 全域變數 num2，在函式內部被改為5
console.log(num2);


// 無法存取function內部的區域變數：Uncaught ReferenceError
console.log(num3);

// 無法存取function的內部巢狀函式：Uncaught ReferenceError
console.log(add());
