
Array.prototype.mySome = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return true;
    }
  }
  return false;
};
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.mySome(even));
