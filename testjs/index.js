// import { Promise } from "core-js";

// function taskLongTimg() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("模拟异步"), 1000)
//     })
// }

// taskLongTimg().then(v => {
//     console.log("promise:", v)
// })

function taskLongTime(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n + 200), n)
    })
}

function step1(n) {
    console.log(`step1 with ${n}`)
    return taskLongTime(n)
}

function step2(m, n) {
    console.log(`step2 with ${m} and ${n}`);
    return taskLongTime(m + n)
}

function step3(h, m, n) {
    console.log(`step3 with ${h},${m} and ${n}`);
    return taskLongTime(h + m + n)
}

function doIt() {
    console.time('doIT')
    let time1 = 300;
    step1(time1)
        .then(time2 => {
            return step2(time1, time2)
                .then(time3 => [time1, time2, time3]);
        })
        .then(times => {
            let [time1, time2, time3] = times;
            return step3(time1, time2, time3)
        })
        .then(result => {
            console.log(`result is ${result}`);
            console.timeEnd('doIT')
        })
}
doIt()