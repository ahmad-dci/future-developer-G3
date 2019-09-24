// function greet(person){
// return "HI "+person
// }
// let name = `Omar ${2+5} am`;
// let greetings=greet(name)
// document.write(greetings)
// //////////////////////////////////////////
//  let num  = str.length
//  document.write(num)
//  function strLength(password){ 

// if(password.length < 8){

//  for(let i = 0 ; i < password.length; i++)
// {
//  if(password[i]=='$'){
//  return "Valid"

//  }
// }return "inValid"
// }else{
//      return "inValid"
//  } 

// }

// let x = '576546$54654'
// let myPass= strLength(x)
// document.write(myPass)

////////////////////////////////////////////

// let str1 = 'The quick brown fox jumps over the $lazy dog';
// console.log(str1.includes('$'))
/////////////////////////////////////////////
// let num  = str.length
// document.write(num)
//////////////////////////////////////////////////////
// function strLength(password){
// if(password.length > 8 && password.includes('$')==false){
// {
// return "Valid"
// }
// }else
//     return "inValid"
// } 
// let x = '576546$54654'
// let myPass= strLength(x)
// document.write(myPass)
////////////////////////////////////////////////////////////////
// let str1 =  'The quick brown fox jumps over the $lazy dog';
// let searchTerm = 'brown';
// let replaceBy = 'black';
// let x = str1.replace(searchTerm , replaceBy)
// document.write(x)
////////////////////////////////////////////////////////////
// function doChange(str1){

//     if(str1.includes('dog')){
//        return str1.replace(searchTerm,replaceBy)
//     }else{
//         document.write('the item is not include')
//     }
// }
// let str1 =  'The quick brown fox jumps over the lazy dog';
// let x = str1.replace('dog', 'rabbit')
// document.write(x)
////////////////////////////////////////////////
// function replaceBz(p, ph1 , ph2){

//     if(p.includes(ph1)){
//        return p.replace(ph1,ph2)
//     }else{
//         return ph1 + " "+ " is not found"
//     }
// }
// let str1 =  'The quick brown fox jumps over the lazy dog';
// let x = 'lazy';
// let y = 'smart';
// let z = replaceBy(str1 , x , y);
// document.write(z)
///////////////////////////////////////////////////////////

// function strLength(password,name) {

// if(password.length < 8 || !password.includes('$') || password.includes(name)) {
//     return 'valid'
// }else{
//     return 'inValid'
// }

// }
// let x = '576kkkooio' , y = 'omar';
// let myPass = strLength(x , y)
// document.write(myPass)
//////////////////////////////////////////////////////
let theCity = {
    name : 'Paris',
    population : '2,000,000',
    continent : 'Europe'
 }
 let Damas = {
    name : 'Damascus',
    population : '5,000,000',
    continent : 'Asia'
 }

function cityFacta(city){
let x=0;
 return  `${city.name} Has ${x} appoultion of ${city.population} and is situted in ${city.continent}`

}
 console.log(cityFacta(theCity))
 console.log(cityFacta(Damas))