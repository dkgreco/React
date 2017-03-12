//using a Callback and the inherent problems of a callback
/*function getTempCallback(location, callback) {
    callback(undefined, '72');
    callback('City Not found.');
}

getTempCallback('Broomfield', function(err, temp) {
    if(err) {
        console.log('error', err);
    } else {
        console.log('success', temp);
    }
});

//Introducing a Promise
function getTempSuccessHandler(temp) {
    console.log('promise success: ', temp);
}

function getTempFailureHandler(err) {
    console.log('promise error: ', err);
}

function getTempPromise(location) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(72);
            reject('Error: City Not Found');
        }, 1000);
    });
}

getTempPromise('Broomfield').then(getTempSuccessHandler, getTempFailureHandler);*/
//Challenge
function makeAPromise(myPromiseToYou) {
    return new Promise(myPromiseToYou);
}

function addSuccessHandler(resolution) {
    console.log('Call Success: ', resolution);
}

function addFailureHandler(rejection) {
    console.log('Call Failure: ', rejection);
}

function addPromiseBuilder (a, b) {
    return function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('[Invalid parameter type passed]');
        }
    }
}

function addPromise(a, b) {
    return makeAPromise(addPromiseBuilder(a, b));
}

addPromise(3,'Test').then(addSuccessHandler, addFailureHandler);