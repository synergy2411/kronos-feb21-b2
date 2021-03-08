// Producer Code - ES6 | 2015 - new Promise()
// Angular 2009 | 2011 - $q

// $q.defer()
// resolve()
// reject()

function promiseDemo(arr, ms) {
    let promise = new Promise(function (resolve, reject) {
        if (arr.length > 2) {
            // Simulate the server respond
            setTimeout(function () {
                resolve({ status: "SUCCESS" })
            }, ms)
        }else{
            reject(new Error('Something bad happened...'))
        }
    })
    return promise;
}

// Consumer Code

promiseDemo([1, 2], 3000)
    .then(function (response) {
        console.log(response);
    }).catch(function (err) { console.log(err) });