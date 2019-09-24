// let demo = [1 ,55 , 6 , 14 , 6 , 22,34];

// demo.forEach(function(item,index){
//  if(item%2==0){
// demo[index]=" This is even number  :" + item
// }

// else{
// demo[index]=" This is odd number  :" + item
// return demo[item]  ;

// }  })

// document.write(demo);


// function logIn(password , username){
// let data = {
// username:"Omar",
// password:1234,
// }
// if(data.username == username && data.password == password){
//     return "Access !!"

// }else{
//     return "Invalid !!"

// }
// }
// let x = logIn( 1234,"Omar" )
// document.write(x)


// function checkBudget(pucket,price){
//     if(price > 80*pucket/100){
//         return `you can not buy it `
//     }else {
//         return `you can  buy it `
//     }
// }
// let result=checkBudget(100, 90);
// document.write(result)              


let ar = [1, 5, 3, 6, 4, "str", true, false, {
        name: "Mostafa"
    },
    [5, 9, 6, 3, 0, 1], 6
]
console.log(ar)
let array = [5, 4, 8, 7, 5, 2, 3, [0, 3, 2, 1, 4, 5, 6]]

function calculate(someArray) {
    var myMind = 0;
    for (let i = 0; i < someArray.lengh; i++) {
      if(typeof someArray[i] === "number") {
myMind += someArray[i]
        }
    console.log(typeof someArray[i])
}else if(typeof someArray[i] ==="object"){
for(let j=0;j<someArray[i].length;i++){
    myMind+=someArray[i[j]]
}
}

}
return myMind
let sum = calculate(array)
console.log(sum)