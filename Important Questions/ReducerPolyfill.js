Array.prototype.reduce = function(reducerFunction, initialValue) {
    if(typeof reducerFunction !== 'function'){
        throw new TypeError('Provide a reducer function')
    }
    let acc;
    let startIndex = 0;
    if(arguments.length > 1){
        acc = initialValue;
    } else {
        if(this.length === 0){
            throw new TypeError('Provide an empty error')
        } else {
            acc = this[0];
            startIndex = 1;
        }
    }
    for(let i = startIndex ; i < this.length ; i++){
        acc = reducerFunction(acc, this[i], i, this);
    }
    return acc;
}

const nums = [1,2,3,4,5,6,7,8,9,10];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum)
