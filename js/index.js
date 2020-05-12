// Your code goes here
import { gsap } from "gsap";

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


navigation[0].addEventListener('mouseover', (event) => {
    preventDefault();
    event.target.style.background="yellow";
})
navigation[1].addEventListener('mouseout', (event) => {
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



let h1 = document.querySelector("h1");



h1.addEventListener('dblclick', function (event) {
    event.target.style.fontSize ="7rem";
  
  });


  const buttons = document.querySelectorAll('.btn')

  buttons[0].addEventListener('mouseover', (event) => {
      event.stopPropagation();
      event.target.textContent="help";
  })

  buttons[1].addEventListener('mouseover', (event) => {
    event.stopPropagation();
    event.target.textContent="me";
})

buttons[2].addEventListener('mouseover', (event) => {
    event.stopPropagation();
    event.target.textContent="please";
})



//   buttons[1].addEventListener('click', (event) => {
//     event.stopPropagation();
//     event.target.textContent="It Worked"
// })


//  buttons[2].addEventListener('click', (event) => {
//      event.target.textContent="It Worked"

//  })
  
buttons.forEach((item) =>{
    item.addEventListener('click', (e)  => {
        event.target.textContent="Sign Me Up!"
        
    })
})

//gsap.to(".logo-heading", {duration: 1, x: 100}); playing around with gsap
