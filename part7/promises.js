function createPromise() {
    return new Promise(function exec(resolve, reject) {
        setTimeout(function () {
            console.log("timer done...");
            reject("reject")
        }, 3000);
    });
}


console.log("start");

let x = createPromise();

console.log("got a new promise");

x.then(function (v) {
    console.log("promise ", v);
}).catch(
    function (v) {
        console.log("handled", v);
    }
)


