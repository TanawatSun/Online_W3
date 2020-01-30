console.log("hello world");

var a = 5;
var b = a;
b = 6;
a;
b;
console.log(a);

var a = ['a','b'];
console.log(a[0]);

var a = 'dog';
console.log(a);
console.log(typeof a);

function say()
{
    console.log('Hello');
}

say();

var f = function hi()
{
    console.log('hi');
}

f();

var s = function(name)
{
    console.log('err'+name);
}

s('name');