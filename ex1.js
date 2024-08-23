// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

function caculatedBMI(weight, tall) {
    return weight / tall ** 2
}

let markBMI = caculatedBMI(78, 1.69) // check weight = 78kg and tall = 1.69 m
let jonhBMI = caculatedBMI(92, 1.95) // check weight = 78kg and tall = 1.69 m

console.log("BMI OF MARK: " + markBMI)
console.log("BMT OF JONH: " + jonhBMI)

let markHigherBMI = (markBMI > jonhBMI) ? true : false
console.log(markHigherBMI)