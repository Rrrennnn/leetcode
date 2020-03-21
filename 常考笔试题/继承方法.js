// 构造函数继承
function Person1(name) {
    this.name = name;
}

function Student1(name, age) {
    Person1.call(this, name);
    this.age = age;
}
var s1 = new Student1("xuhanlin");
console.log(s1.name);


// 原型链继承
function Person2() {
    this.name = "renyuan";
}

function Student2(age) {
    this.age = age;
}
Student2.prototype = new Person2();
var s2 = new Student2();
console.log(s2.name);

// 组合继承
function Person3() {
    this.name = "renyuan";
}

function Student3() {
    Person3.call(this);
    this.age = "18";
}
Student3.prototype = new Person3();
var s3 = new Student3();
console.log(s3.name, s3.age);


