(function(){
    "use strict";
    console.log("js is linked boi");
let hamButton = document.querySelector("#hamburger");
let Menu = document.querySelector("#hamDiv");
//Adding new classes that will activate the hamburger menu

function hamburgerClicked(){
	Menu.classList.toggle ("slide");
	hamButton.classList.toggle ("clicked");
}

hamButton.addEventListener("click", hamburgerClicked);
})();