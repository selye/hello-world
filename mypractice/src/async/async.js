function asynchronous(response) {
    return new Promise((resolve, reject) => {
        if (response > 10) {
            resolve("ok")
        } else {
            resolve("no")
        }
    })
}

async function getNumber() {
    let myResult = "初始值"
    await asynchronous(100).then(res => {
        myResult = res
    })
    console.log(myResult)
}
getNumber()


function timeOut(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}
async function asyncPrint(value, ms) {

    console.log(value)
}
asyncPrint("hello world", 50)


async function async1() {
    console.log("async1 start")
    await async2()
    console.log("async1 end")
}
async function async2() {
    console.log("async2 start")
}
console.log("All start")
async1();
new Promise((resolve) => {
    console.log("promise1")
    resolve();
}).then(() => {
    console.log("promise1 end")
})