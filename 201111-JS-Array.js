// Array
var fruits = ['Apple', 'Banana'];
var frist = fruits[0];
var last = fruits[fruits.length - 1];

// 更改陣列中成員的值
var fruits1 = ['Apple', 'Banana'];
fruits1[0] = 'Orange';
fruits1[1] = 101;
console.log(fruits1); // ["Orange",101]

// push() 新增成員至陣列尾端
var fruits2 = ['Apple', 'Banana'];
fruits2.push('Orange');
console.log(fruits2); //['Apple', 'Banana', 'Orange']

// 使用pop() 移除陣列中'最後一個成員'
var fruits3 = ['Apple', 'Banana'];
var last = fruits3.pop(); // remove Banana
console.log(fruits3); //['Apple']

// 使用for語法,讀取陣列中所有成員
var fruits4 = ['Apple', 'Banana', 'Orange'];
for(var i =0; i<fruits4.length; i++){
    console.log(fruits4[i]);
}
