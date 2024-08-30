Array.prototype.myMap = function(callback) {
    const resultArray = [];
    for(let i = 0; i < this.length; i++) {
        resultArray.push(callback(this[i]));
    }
    return resultArray;
}   

const arr = [1, 2, 3, 4, 5];
const result =arr.myMap((item) => item * 2);
console.log(result)