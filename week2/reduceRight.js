Array.prototype.myReduceRight = function(callback){
    let acc = [];
    for (let index = 0; index < this.length; index++) {
       acc = callback(acc,this[index]);
    }
    return acc;
}

const arr =[
    [0, 1],
    [2, 3],
    [4, 5]
]
const result = arr.myReduceRight((acc,item)=>acc.concat(item));
console.log(result); // [4, 5, 2, 3, 0, 1]