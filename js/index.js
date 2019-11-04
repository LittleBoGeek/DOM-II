// Your code goes here

 let navigation = document.querySelectorAll("a")



 navigation[0].addEventListener('click', (event) => {
     event.target.style.background="pink";
 })
 navigation[1].addEventListener('click', (event) => {
    event.target.style.background="pink";
})
navigation[2].addEventListener('click', (event) => {
    event.target.style.background="orange";
})
navigation[3].addEventListener('click', (event) => {
    event.target.style.background="gray";
})


navigation[0].addEventListener('"mouseover', (event) => {
    preventDefault();
    event.target.style.background="yellow";
})
navigation[1].addEventListener('"mouseout', (event) => {
   event.target.style.background="dodgerblue";
})
navigation[2].addEventListener('click', (event) => {
   event.target.style.background="silver";
})
navigation[3].addEventListener('click', (event) => {
   event.target.style.background="purple";
})


let counter = function () {
    console.log("Click me again");
}

let buttons = document.querySelectorAll('.btn');
buttons[0].addEventListener('click', (event) => {
    console.log("buton was clicked")
})
buttons[2].addEventListener('click', (event) => {
    console.log("buton was clicked")
})

let h1 = document.querySelector("h1");



h1.addEventListener('dblclick', function (event) {
    event.target.style.fontSize ="7rem";
  
  });






  




  
