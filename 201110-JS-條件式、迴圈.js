// 條件式
// if else
var age = 10;
var status = 'unknow';
if (age > 18) {
    status = 'adult';
} else {
    status = 'child';
}
console.log(status);

// switch
var friutType = 'Bananas';
switch (friutType) {
    case 'Oranges':
        console.log('Oranges');
        break;
    case 'Bananas':
        console.log('Bananas');
        break;
    case 'Papayas':
        console.log('Papayas');
        break;
    default:
        console.log('沒有符合的條件');
}

// for loop
var counter =0;
for(var i=0; i<5;i++){
    counter += i;
}
console.log(counter); // 10

// while loop
var n = 0;
var x = 0;
while(n<3){
    n++;
    x +=n;
}
console.log(x); // 6
var i =10;
do{
    i += 1;
}while(i<5);
console.log(i); // 11
