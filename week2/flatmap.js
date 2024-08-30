Array.prototype.myFlatMap = function (callback) {
        let acc = [];
        for (let index = 0; index < this.length; index++) {
            acc = acc.concat(callback(this[index]));
            
        }
        return acc;
}
const arr1 = [1, 2, 1];

const result = arr1.myFlatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);
// Expected output: Array [1, 2, 2, 1]
