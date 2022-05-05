// Take z = 1 & m = 5, create Loop from 1 to m. Inside loop: Set variable 'z' with the product of current value of variable 'i' [for loop variable] and previous value of variable 'z'. Print this new value of 'z'.

let z = 1;
const m = 5;
for (let i=1; i<m; i++){
  z = z * i
}
console.log(z)