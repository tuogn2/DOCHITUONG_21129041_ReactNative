
Array.prototype.myReduce = function(callback,init){
    let acc = init;
    for (let index = 0; index < this.length; index++) {
        acc = callback(acc,this[index]);
    }
    return acc;
}

const arr = [1, 2, 3, 4];

const init = 0;
const sumwithInit = arr.myReduce((acc, item) => {
    return acc + item;
}, init);

console.log(sumwithInit); // 10