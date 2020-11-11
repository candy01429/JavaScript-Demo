// JavaScript 物件
var myObj = new Object(); // 物件建構式
var myObj1 = {}; // 物件字面

// 建立一個物件，有2個屬性color和height
var myObj2 = {'color':'blue','height':101};
var myObj3 = {color:'blue',height:101}; // 屬性名稱''可省略

// 用.存取物件屬性
// 建立一個叫color的屬性,值是blue
var myObj4 = {};
myObj4.color = 'blue';
var myColor = myObj4.color;

// 用[]存取物件屬性
var myObj5 = {};
myObj5['color'] = 'blue';
var myColor1 = myObj5['color'];

// []內可以是個變數
var myObj6 = {};
var propName = 'color';
// 建立一個叫color的屬性,值是blue
myObj6[propName] = 'blue';
// myObj6.propName = 'blue'; // error
// 輸出 blue
console.log(myObj6[propName]);
