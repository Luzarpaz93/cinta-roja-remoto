// console.log(1);
// consooe.log(2);
// console.log(3);

// console.log(1);
// setTimeout(() => {
//     //callback, cuanto tiempo dura en la pila
//     console.log(2);
// },3000);
// setTimeout(() => {
//     console.log(3)
// }, 1000);
// console.log(4);

console.log(1);
setTimeout(() => {
    console.log(2);
}, 1000);
for (let i = 0; i<999999999; i++); //-----> es mi cuello de botella
console.log(4);