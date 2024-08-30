Array.prototype.myFind = function(callback){
    for (let index = 0; index < this.length; index++) {

        if(callback(this[index])){
            return this[index];
        }
    }
}
const array1 = [5, 12, 8, 130, 44];

const found = array1.myFind((element) => element > 12);

console.log(found);
// Expected output: 12