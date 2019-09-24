// function summe(number){
//     let mind = 0
//     for(let i=0;i<=number;i++){
//         mind=mind+i;  

      
// }
//       return mind

// }

// console.log(summe(10))//
////////////////////////////////////////////////////

// function number(n,y){
//     return n+y

// }
// let x = number(number(50,-20), number(2,5));
// document.write(x)
function factNum(n){
let temp = 1
for(let i=1;i<=n ; i++){
    temp = temp*(i)
}
return temp

}
let x = factNum(0)
document.write(x)