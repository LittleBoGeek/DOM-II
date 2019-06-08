// Your code goes here
const clickCount = function() {
    console.log("times a button was clicked");
}

const button = document.querySelectorAll(".btn");

button[0].addEventListener("click", clickCount);
button[1].addEventListener("click", clickCount);
button[2].addEventListener("click", clickCount);


const navMenu = document.querySelectorAll("a");

navMenu[0].addEventListener("mouseover", function(event) {
event.target.style.color ="red";
});
navMenu[1].addEventListener("mouseover", function(event) {
    event.target.style.color ="blue";
    });
    navMenu[2].addEventListener("mouseover", function(event) {
        event.target.style.color ="green";
        });
        navMenu[3].addEventListener("mouseover", function(event) {
            event.target.style.color ="yellow";
            });

           navMenu[0].addEventListener("mouseout", function(event){
               event.target.style.color = "purple";
           });
           navMenu[1].addEventListener("mouseout", function(event){
            event.target.style.color = "pink";
        });
        navMenu[2].addEventListener("mouseout", function(event){
            event.target.style.color = "orange";
        });
        navMenu[3].addEventListener("mouseout", function(event){
            event.target.style.color = "teal";
        });


const h1 = document.getElementsByTagName("h1");




       
const db = function(object) {
object.style.fontSize ="13rem";
}

h1.addEventListener('dbclick', function(event){
    event.target.style.fontSize = "36rem";
});


