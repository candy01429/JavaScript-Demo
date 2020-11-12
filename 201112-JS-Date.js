// Date
var d1 = new Date(1977, 11, 11, 23, 30, 15);
console.log(d1);

var d2 = new Date(1977, 11, 11);
console.log(d2);

var d3 = new Date(2017, 13, 1);
console.log(d3);

// 文字轉換成Date物件
var d1 = new Date('Sat Feb 1 2018 08:00:00 GMT+0800(CST)');
console.log(d1);

var d2 = new Date('2018-02-17T08:00:00');
console.log(d2);

// 使用> < <= >= 比較Date先後關係
var today = new Date();
var someday = new Date(2019, 10, 1);
if (someday > today) {
    console.log('Today is before 2019/10/1');
}

// 比較2日期是否相等,使用getTime
var d1 = new Date(2018, 1, 1);
var d2 = new Date(2018, 1, 1);
console.log(d1.getTime() == d2.getTime()); // true
console.log(d1 == d2); // false
