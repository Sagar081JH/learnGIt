// function main(){
//     var x= 30;
//     console.log(x);
//     const book = {'title':'hello'};
//     book.title="Hi";
//     console.log(book.title);
// }

// const d = function (a,b){
//     return a-b;
// }

// const f = (a,b) => {
//     return a+b;
// }
// console.log(d(12,32));


const ids= [1,2,4,55,2];
ids.forEach((id) =>{
   // console.log(id);
})
// rest operator
function restOp (a, ...b){
    console.log(a);
    console.log(b);
}

//restOp(1, "wwd", "wsasas", "lll");

//Spread Operator
const fruits =  ["apple", "banana"];
const vegies = ["carrot", "spinach"];
const all = [...fruits, ...vegies, "orange"];
console.log(all);