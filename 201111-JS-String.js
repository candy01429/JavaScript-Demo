// String 
console.log(typeof 'A');
console.log(typeof "A");
console.log(typeof String(true));
console.log(typeof new String('A')); // object
//
// 跳脫字元'\'
var str = 'Jim\'s book';
var str = "This is a \"book\".";
var inputTag = '<input type="text" id="name">';

// == 判斷字串'值'與'內容'是否相等 
// === 判斷字串是否相等 
console.log('Jim' == new String('jim')); // true
console.log('Jim' === new String('jim')); // false

// lenght 
console.log(String(true).length); // 4

// 使用'+'相連字串
var longString ='This is a very long long long long long'+
        'long long long long String';

// 字串最後加上\,表示字串會從下一行接續下去,\後除了換行符號,不能再有何字元(包含空白)
var longString = 'This is a very long long long long long \
long long long long string.';
console.log(longString);

// charAt()取得字串中特定位置(index)
console.log('hello'.charAt(1)); // e

// replace()將字串中的字取代為另一個字,預設取代第一個
var str = "javascript, javascript, JavaScript";
var n = str.replace("javascript","js");
console.log(n); // js, javascript, JavaScript

var str = "javascript, javascript, JavaScript";
var n = str.replace(/javascript/gi,"js");
console.log(n); // js, js, js
