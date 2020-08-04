function foo() {
    console.log(this.bar)
}
var bar = "bar1"
var o2 = { bar: "bar2", foo: foo }
var o3 = { bar: "bar3", foo: foo }

foo(); //bar1
o2.foo(); // bar2
foo.call(o3); //bar3


var name = 'Nicolas';

function Person() {
    this.name = 'Smiley';
    this.sayName = function() {
        console.log(this);
        console.log(this.name);
    };
    setTimeout(this.sayName, 0); // 第二次输出
}

var person = new Person();
person.sayName();


function Person() {
    this.name = "Smiley";
    this.sayName = function() {
        console.log(this);
        console.log(this.name);
    };
}

let person = new Person();
person.sayName.call({ name: "Nicolas" });


function Person() {
    this.name = "Smiley";
    this.sayName = () => {
        console.log(this);
        console.log(this.name);
    };
}

let person = new Person();
person.sayName.call({ name: "Nicolas" });
//箭头函数没有自己的this  在哪里创建 this就指向哪里
//普通函数   谁调用我  我的this就是谁
var age = "qwqw"

function person() {
    var age = "hello"
    console.log(this.age)
}
person()
person: () => {
    var age = "12";
    console.log(this.age)
}


var name = "李青",
    skil = "神龙摆尾";
var that = this;
var obj = {
    name: "亚索",
    objSkil: this.skil,
    getPerson: () => {
        console.log(this.name + "的技能是:" + that.skil)
    }
}
console.log(obj.objSkil);
obj.getPerson()