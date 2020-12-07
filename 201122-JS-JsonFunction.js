// define a json String

var s = '{"firstName":"John", \
		  "lastName": "Smith", \
		  "sex":"male", "age":25, \
		  "address":{"street":"21 2nd Street", "city":"New York", "state":"NY","postalCode":"10021"},\
		  "phoneNumber":[{"type":"home", "number":"212 555-1234"},{"type":"fax","number":"646555-4567"}]}';
console.log(s);

// convert a json string to javascript object
var jsObject = JSON.parse(s);
console.log(jsObject);

// convert a javascript object to json string
var jsonString = JSON.stringify(jsObject);
console.log(jsonString);
