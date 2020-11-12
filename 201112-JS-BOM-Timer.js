// timer 計時器
// setTimeout 設定'一段時間'後自動執行某函式,只執行一次
var timeoutID = setTimeout(myFunc,5000,"some message..."); 
function myFunc(msg){
    alert(msg);
}
// clearTimeout(timeoutID); // 取消setTimeout

// setInterval
var IntervalID = setInterval(function(){
    alert('message again!');
},5000);
// clearInterval(IntervalID) // 取消setInteval
