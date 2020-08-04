//扩展运算符 ...

// (1) 复制数组
var a = [1, 2, 3, 4]
var a1 = a;
a1[2] = 4;
console.log(a1 == a) //true
    //因为这并不是克隆数组，而是指向了同一个数组地址 所以会改变原数组

var a = [1, 2, 3, 4]
var a2 = a1.concat()
a1[2] = 4;
console.log(a1 == a) //false
    //concat 会返回一个新的数组  所以不会改变原数组

var a1 = [1, 2, 3, 4]
var a2 = [...a1]
a2[2] = 4;
console.log(a1) //[1,2,3,4]
console.log(a2) //[1,2,4,4]
    //  ...扩展运算符可以进行复制数组 并且不影响原数组

//(2)合并数组
var arr = [1, 2, 3]
var arr1 = [4, 5, 6]
var arr2 = [7, 8, 9]
var res = arr.concat(arr1, arr2)
var res1 = [...arr, ...arr1, ...arr2]
console.log(res1)
    //这都是浅拷贝

var [arr, ...arr1, ...arr2] = [1, 2, 3, 4, 5, 6]
console.log(arr)
console.log(arr1)
console.log(arr2)
    //如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错


var str = "西游记";
var strlength = str.length; //获取数组长度
var random = Math.floor(Math.random() * strlength); //生成随机下标
var result = str.substr(random, 2)
console.log(result)

//扩展运算符 对象 用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
var personList = [{
        name: "shijie",
        age: 20
    },
    {
        name: "shenhuanjing",
        age: 21
    },
    {
        name: "anqila",
        age: 16
    }
];
var personRes = personList.map(route => {
    if (!route.height) {
        route = {
            ...route,
            height: route.age
        }
    }
    console.log(route)
})

var bar = {
    a: 1,
    b: 2
}
var baz = {
    ...bar
}
console.log(baz)