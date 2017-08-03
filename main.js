var client = {
    'name':'Lucy',
    'age':'23',
    'address':'Japan'
};
console.log(client);

var contains = false;
var word = "nacho cheese";

for (var letter of word) {
    contains = (letter=== "a") || contains;
};
console.log(contains);