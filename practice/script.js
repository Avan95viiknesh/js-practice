// // let a =1;
// // let b = 2;
// // let  c = a+b;

// // document.getElementById("demo").innerHTML = "the value is " + c 

// // console.log(a);




// let name ='Kuran'

 

// console.log(name);


// let x= 2;

// {
//     let x =3;
//     document.getElementById('data').innerHTML = "the value is " + x
// }


// //document.getElementById('data').innerHTML= "x is " + x





// // hoisting concept

// abc = 100;

// var abc;

// console.log(abc);  // output printed value


// cde = 200;

// let cde;

// console.log(cde);  // output printed reference error


// fgh = 300;

// //const fgh;

// console.log(fgh); // output printed syntax error

// let text = "Please locate where'locate'occurs!";
// document.getElementById("demo").innerHTML = text.indexOf("locate");

// console.log(text.length);


// let text = "Apple, Banana Kiwi";
// let part = text.slice(7,13);
// document.getElementById("demo").innerHTML = part; 


// let dates = new Date();

// console.log(dates); //

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// fruits.forEach(ele => console.log(ele));


// const language = 'javascript is a language'

// const rplace = language.replace('is', 'iss')

// const sres = language.slice(0,3)

// const check = language.charAt(1) 
// const result = language.indexOf('for')


// console.log(sres);


// const cars = ['audi', 'ford', 'honda']

// const rst = cars.fill()

// console.log(rst);

//  var ages =  ['22', '21', '33', '53']

//  function checkage(age){

//     return age >= 18
//  }

// console.log(
//     ages.filter(checkage));
 




var objs = {
   'Students': [{
           "name": "Raj",
            "Age":"15",
           "RollNumber": "123",
           "Marks": "99",
             
       }, {
           "name": "Aman",
            "Age":"14",
           "RollNumber": "223",
           "Marks": "69",
          },
          {
           "name": "Vivek",
            "Age":"13",
           "RollNumber": "253",
           "Marks": "89",
          },
       ]
};


var filRes = objs.Students.filter(function (el)
{
return el.Age >=15 &&
		el.RollNumber <= 200 &&
		el.Marks >= 80 ;
}
);

console.log(filRes);




fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => {
 
  const datas = document.querySelectorAll("#list");
   
  for(var i =0; i < datas.length; i++) {
   
      datas[i].innerHTML = data[i].name;

  }
 
 
   


 });
 
 

// document.querySelector('#search').addEventListener('input', filterList)
 

// function filterList()
// {
//    const searchInput = document.querySelector('#search');
//    const filter = searchInput.value.toLowerCase();
//    const listItems = document.querySelectorAll('#list-items');

//    listItems.forEach((item) =>{
//       let text = item.textContent;
//       if(text.toLocaleLowerCase().includes(filter.toLocaleLowerCase())){
//          item.style.display = '';

//       }else {
//          item.style.display ='none'; 
//       }
//    })
// }
 
 
 const day =  'monday' 

 values = {
   'monday' : 0,
   'tuesday' : 1,
   'wednesday' : 2,

 }


 
const rest = values[day] ?? -1

console.log(rest);


let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b == c);

 
// const person = {

//    fullName : function(city,country){
//       return this.firstname + ' ' + this.lastname + ' ' + city + ' ' + country;
//    }
// }


// const person1 = {
//    firstname :"john",
//    lastname : "doe",
   
// }

// console.log(person.fullName.call(person1, 'chennai', 'india'))
// console.log(person.fullName.apply(person,['chennai', 'india']))
 


const firstPerson = {

   firstname:'john',
   lastname:'doe',
   fullName: function(){
      return this.firstname + ' ' + this.lastname 
   }
}
 

const member = {

   firstname:'viikie',
   lastname:'varner'
}


let fullNames = firstPerson.fullName.bind(member);

 console.log(fullNames)



 function clickMe(){

   return document.getElementById('hi').style.color='red'
 }


 //events of dom

 
 function changeOut(){

   return document.getElementById('event').innerHTML= 'changed '
 }

  
 function mouseOver(){

   return document.getElementById('event').innerHTML= 'onMouse over '
 }