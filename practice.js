/*
console.log("hello");
function addnumbers(a, b, c)
{
    return  a+b+c;
}
let c=addnumbers(2, 3, 5);
console.log(c);
alert("Hello") ;
alert("world") ;
prompt("What is your name?")
var myname = "sameer ali butt";
 alert(myname) ;
food = 20;
console.log (food);
fruit = prompt('what is your favourite fruit? ');
console.log(fruit);
food = prompt('what was your bill that u ate food? ');
foodpercentage= prompt('tip%')/ 100;
foodamount= food * foodpercentage;
console.log(foodamount);
totalamount = alert(foodamount + food);
Math.floor('110.25');
Math.floor(Math.random() *3);  //round off to lower number
Math.ceil(Math.random() *3);  // round off to highest closest number
*/
// let weather = prompt('hows the weather? '); 
// if(weather == 'rain')
// {
//     console.log('Grab your umbrella ')
// }
// else{
//     console.log('Grab your sunglasses ')
// }






// Functions 
// function saymyname(name){
//     console.log(name);
// }
// saymyname('sameer');

// function greetings(name)
// {
//     greet = `hi ${name}, nice to meet you.`
//      console.log( greet)
// }
// greetings('sameerbuttjee');
// function sum(a, b)
// {
//     return a+b;
// }
//  num1 =sum(2, 3);
// console.log(num1);



// // arrow function of sum with explicit return
// const sumbill = (food, tipamount) => food + tipamount;
// function foodtipcal(food, tip)
// {
//  const tippercentage= tip/ 100;
//  const  tipamount= food * tippercentage;
// totalbill= sumbill(food, tipamount);
// console.log(  'Your tip amount will be ' + tipamount);
// // console.log('Your total bill wil be ' + totalbill);
//  return totalbill; 
// }
// // console.log(foodtipcal(100, 50));
// foodi1 =foodtipcal(100, 50);
// console.log(foodi1);





// Practice exercise
//  sum = (a, b) =>
//  {
//     return a + b;
// }
//   sub = (a, b) =>
//  {
//     return a - b;
// }
//   mul = (a, b) =>
// {
//    return a * b;
// }
//  div = (a, b) =>
// {
//    return a / b;
// }
//  displayresults = () =>{

// console.log(sum(2, 2));
// console.log(sub(2, 2));
// console.log(mul(2, 2));
// console.log(div(2, 2));
// }
//   fullresult=displayresults();
//   console.log(fullresult);






// // Arraays
// let groceries= ['apple' , 'banana', 'pear'];
// console.log(groceries);
// console.log(groceries[0]);
// groceries.push('appricot');
// console.log(groceries);
// console.log(groceries.slice(1,4));
// console.log(groceries.indexOf('banana')); //gives us the index of every that elemet which we want to find
// console.log(groceries.length);






// objects
//differnet way to access objects 
//dot notations 
// const person=
// {
//     name:'sameer',
// shirt: 'black',
// pent: 'brown'
// }
// console.log('Dot notation');
// console.log( 'Name of person is ' + person.name);
// console.log ( 'Shirt color is '  + person.shirt);
// console.log( 'Pent color is '  + person.pent);
// //bracket notations
// console.log('Using bracket notation');
// console.log( 'Name of person is ' +person['name']);
// console.log( 'Pent color is '  +person['pent']);
// person.phone= '03181566195';
// console.log(person['phone']);
// console.log(person);
//  let person= {
//     name: 'Sameer Ali Butt' ,
//     Age: '22',
//     Degree : 'BSCS',
//  }
//  console.log(person.name);
//  console.log(person.Age);
//  console.log(person.Degree);
//  person.email_id = 'sameerofficial929@gmail.com';
//  console.log(person['email_id']);

// const introducer = (name, age, assets, dept) => // arrow function with e6
// {
// let person ={
// name :name ,
// age: age,
// assets: assets,
// dept: dept ,
// networth: function()
// {
//     return person.assets - person.dept
// }
// }
// //  const intr0 =
// //  console.log('my name is ' + name + 'and my age is ' + age + '.')
// const intro = `My name is ${person.name} and my age is ${person.age} and my net worth is $${person.networth()}`; //`` template literals
// return intro;
// }
// console.log(introducer('sameer', 22, 200, 50));





// //Loops
// let fruits= ['apple' , 'banana', 'pear', 'guaava' ,'annar', 'chiknder', 'mango'];
// for( i=0; i<fruits.length; i++)
// {                //ugly way to write a loops
// console.log(i  + '-' + fruits[i]);
// }
// for ( let sameer of fruits){
//     console.log(sameer);
// }
//  let numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  let results= [];
//  let store;
//  for (sameer of numbers)
// {
//      console.log(sameer*2);
//      results.push(sameer*2);

// }
// console.log(results);

//Writing  a fuction having loop to sore numbers in the array and then string it in another resultnt array 
// const functionloop = (numbers) =>
// {
// let result =[];
// for (sameer of numbers)
// {
//     result.push(sameer**2);
// }
// return result ;
// }
// console.log(functionloop([1, 2, 3, 4, 5, 6]));


//arrays with loops and objects
//  const lettercounter = (paragraph) => 
//  {
//    let result=0;

//     for (letters in paragraph)
//     {
//         console.log( Number(letters) + 1);
//         result=Number(letters) + 1;
//     }
//     return { result: paragraph.length };

//  } 
//  let paragraph = prompt('write your paragraph');
//  console.log(lettercounter(paragraph));

// //replacing all above code with .length
// const lettercounter = (paragraph) => 
// {

//    return { result: paragraph.length };

// } 
// let paragraph = prompt('write your paragraph');
// console.log(lettercounter(paragraph));



//writing a function that sums all the numbers in the array throigh for loop

// const max = (numbers) =>
// {
// let result= numbers[0];
// for (  number of numbers)
// {
//     if(number > result)
//     {
//         result = number;
//     }
// }
// return result;
// }
// console.log(max([0, 1, 2, ,3, 4, 5, 6, 22, 88, 4, 3, 96, 8, 632, 148, 3625, 8896, 1452, 99999]));



//writing a program which counts the frequency (number of occurance ) in a phrase

// const letterfrequency = (phrase) => 
// {
// // let phrase = 'hahaha'
// let frequency= {};
// for ( letter of phrase)
// {
//     console.log(letter);
//     if( letter in frequency)
//     {
// frequency[letter] = frequency[letter] +1;
//     }
//     else{
//         frequency[letter] =1;
//     }
// }
// return frequency;
// }
// console.log(letterfrequency('my name is sameer and i am learning javascript from cleevr programming.'));



//finding word frequency by making a pharse to work like an array through split function
// const wordfrequency = (phrase) => {
//     let frequency = {}
//     let array = phrase.split(' ')
//     console.log(array);
//     for (word of array)
//      {
//         if (word in frequency)
//          {
//             frequency[word] = frequency[word] + 1;
//          }
//          else 
//          {
//             frequency[word] = 1;
//          }
//     }
//     return frequency;
// }
// console.log(wordfrequency('lol how are u lol how'));



//Higher Order Function
//MAP array method
// [1, 2, 3, 4, 5].map(number => console.log(number) )
// let result= [1, 2, 3, 4, 5].map(number => number*3 ) //array itself a object also function
// console.log(result);

// const filter = (numbers, gratertthan) => {
//     let results = [];
//     for (number of numbers) 
//     {
//         if (number > gratertthan) 
//         {
//             results.push(number);
//         }
//         else
//          {
//             console.log('NULL')
//         }
//     }

//     return results;
// }
// console.log(filter([1, 2, 3, 4, 5, 6, 7], 3));
// const nums=[1, 2, 3, 4, 5, 6];
// console.log(nums.filter(num => num > 3)); //filter always gives us the the array result but map doesnt

// const nums= [1, 2, 3, 4, 5, 6];
// console.log(nums.filter(num => num>2 || num<4 ));
//if && both conditions have to be true otherwise it will be false.

//HIGHER ORDER FUNCTIONS
//MAP
// console.log('masterminds')
// let companyname= document.getElementById('comname');
// console.log(companyname.innerHTML)
// companyname.innerText = 'heelo jee';
// console.log(comname.innerText)
// console.log('hello jee usta jee')

// let samname= document.getElementById('divname')
// console.log(samname.innerText)