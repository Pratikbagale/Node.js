const app = require('./app')

const arr = [12, 32, 34, 54, 56, 32, 34]

let result = arr.filter((item) => {
    return item === 32
})
console.log(result);
