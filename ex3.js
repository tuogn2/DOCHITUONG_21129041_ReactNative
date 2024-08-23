// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times.The winner with the highest average score wins a trophy!

function averageScoreOfTeam(s1, s2, s3) {
    return (s1 + s2 + s3) / 3
}

let pointOfDolphins = averageScoreOfTeam(96, 108, 89);
let pointOfKoalas = averageScoreOfTeam(88, 91, 110);
console.log(pointOfDolphins)
console.log(pointOfKoalas)

if (pointOfDolphins < 100 || pointOfKoalas < 100) {
    console.log("A verage has least 100 points")
} else if (pointOfDolphins > pointOfKoalas) {
    console.log(`Dolphins points grather than Koalas points`)
} else if (pointOfDolphins == pointOfKoalas) {
    console.log(`all both has same points`)
} else {
    console.log(`Koalas points grather than Dolphins points `)
}