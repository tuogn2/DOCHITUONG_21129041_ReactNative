Array.prototype.myFillter = function(callback){
    const resultArray = []
    for (let index = 0; index < this.length; index++) {
        if(callback(this[index])){
            resultArray.push(this[index])
        }
    }
    return resultArray;
}

const arr = [1,1, 2, 3, 4, 5];
const result = arr.myFillter((item) => {
    return item > 2;
});
console.log(result); // [3, 4, 5]