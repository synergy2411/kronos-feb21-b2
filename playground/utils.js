function getLuckyNumber(){
    return Math.round(Math.random() * 100);
}

// Es5 way - module exports
module.exports = {
    getLuckyNumber
}

// ES6 way
export function getMyLuckyNumber(){}