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



    "use strict";
    //REMOVE BEFORE SUBMITTING
    console.log("js is linked boi");
    
    const Extra = document.querySelector('#Extra'),
        Classic = document.querySelector('#Classic'),
        Crazy = document.querySelector('#Crazy'),
        ExtraInfo = document.querySelector('#ExtraText'),
	ClassicInfo = document.querySelector('#ClassicText'),
	CrazyInfo = document.querySelector('#CrazyText');
    
    const featureInfo =[
    [`Extra flavour for every customer who enjoy strong taste of good beer!`],
    [`Classic flavor with expense touch for customer enjoy the original tatse of good aged beer!`],
    [`New feature taste we create to strike the drinking communities with secret recipe that will please the most picky customer.`]];
    
    
    //Adding new classes that will activate the hamburger menu
    
    function ExtraClick(){
        ExtraInfo.textContent = featureInfo[0];
    }
    
    function ClassicClick(){
        ClassicInfo.textContent = featureInfo[1];
    }
    
    function CrazyClick(){
        CrazyInfo.textContent = featureInfo[2];
    }

    
    //Event Listeners
    Extra.addEventListener("click", ExtraClick);
    Classic.addEventListener("click", ClassicClick);
    Crazy.addEventListener("click", CrazyClick);
 
    })();