const promise = new promise((resolve, reject) => {
    if (success) {
        //成功
        resolve(value)
    } else {
        //失败
        reject(value)
    }
})

promise.then(value => {
    //success
}, error => {
    //error
})

let promise1 = new Promise((resolve, reject) => {
    resolve('sucess1')
})
let promise2 = new Promise((resolve, reject) => {
    resolve('sucess2')
})
promise1.then(value => {
    console.log(value)
})
promise2.then(value => {
    console.log(value)
})


function runAsync() {
    var str = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("立即执行");
            resolve("随便什么数据")
        }, 2000)
    })
    return str;
}
runAsync().then(value => {
    console.log(value)
})


function getNumber() {
    var p = new Promise((resolve, reject) => {
        setTimeout(() => {
            var num = Math.ceil(Math.random() * 10); //生成随机数
            console.log(num)
            if (num < 5) {

                resolve("数值小于5")
            } else {

                reject("数值大于5")
            }
        }, 2000);
    })
    return p
}
getNumber().then(data => {
    console.log(data)
}, error => {
    console.log(error)
})

var start = 0;

function add1() {
    var num1 = new Promise(resolve => {
        console.log("第一次加1完成")
        resolve(start + 1)
    })
    return num1
}
add1().then(data => {
    console.log(data)
    return "done"
})

function add2(val) {
    var num2 = new Promise(resolve => {
        console.log("第二次加1完成")
        resolve(val + 1)
    })
    return num2
}

function add3(val) {
    var num3 = new Promise(resolve => {
        console.log("最后一次加1完成")
        resolve(val + 1)
    })
    return num3
}
add1().then(data => {
    console.log(data)
    return add2(data)
}).then(data2 => {
    console.log(data2)
    return add3(data2)
}).then(data3 => {
    console.log(data3)
});

function test(resolve, reject) {
    let timeOut = Math.random() * 2
    console.log('set timeout to: ' + timeOut + ' seconds.')
    setTimeout(function() {
        if (timeOut < 1) {
            console.log("call resolve")
            resolve('200 ok')
        } else {
            console.log("call reject")
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000)
}

let myPromise = new Promise(test).then(response => {
    console.log("成功" + response)
}).catch(reason => {
    console.log("失败" + reason)
})
myPromise()

function runAsync1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("异步任务1执行完成")
            resolve("随便什么数据1")
        }, 2000)
    })
}

function runAsync2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("异步任务2执行完成")
            resolve("随便什么数据2")
        }, 2000)
    })
}

function runAsync3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("异步任务3执行完成")
            resolve("随便什么数据3")
        }, 2000)
    })
}
runAsync1().then(data => {
    console.log(data)
    return runAsync2()
}).then(data => {
    console.log(data)
    return "直接返回数据111"
}).then(data => {
    console.log(data)
})

function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.ceil(Math.random() * 10)
                //生成0-10的随机数
            if (num <= 5) {
                resolve(num)
            } else {
                reject(num + "数字太大了")
            }
        }, 2000)
    })
}
getNumber().then(data => {
    console.log("resolved")
    console.log(data)
}).catch(reason => {
    console.log("reject")
    console.log(reason)
})


function promiseLoad() {
    return new Promise((resolve, reject) => {
        if (true) {
            //操作成功执行resolve
            resolve('操作成功s')
        } else {
            //操作异常执行reject
            reject("操作异常")
        }
    })
}
promiseLoad.then(requestA)
    .then(requestB)
    .then(requestC);

function requestA() {
    console.log("A请求成功")
    return '下一个请求B'
}

function requestB(res) {
    console.log("上一个请求:" + res)
    console.log("B请求成功")
    return "下一个请求C"
}

function requestC(res) {
    console.log("上一个请求:" + res)
    console.log("C请求成功")
}