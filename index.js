skills_btn = document.querySelector(".active-link_sk");
Experience_btn = document.querySelector(".active-link_ex");
Education_btn = document.querySelector(".active-link_ed");
Experience = document.querySelector("#Experience");
Education = document.querySelector("#Education");
skills =document.querySelector("#skills");
var moon = document.querySelector(".moon");
var main = document.querySelector(".main");

skills_btn.addEventListener("click", function(){
    skills.style.display = "block";
    Education.style.display = "none";
    Experience.style.display = "none";
    skills_btn.style.borderBottom = "2px solid #8ABCD7";
    Experience_btn.style.borderBottom  = "none";
    Education_btn.style.borderBottom  = "none";
    
});

Experience_btn.addEventListener("click", function(){
    skills.style.display = "none";
    Education.style.display = "none";
    Experience.style.display = "block";
    Experience_btn.style.borderBottom  = "2px solid #8ABCD7";
    skills_btn.style.borderBottom  = "none";
    Education_btn.style.borderBottom  = "none";
   
});
Education_btn.addEventListener("click", function(){
    skills.style.display = "none";
    Experience.style.display = "none";
    Education.style.display = "block";
    Education_btn.style.borderBottom  = "2px solid #8ABCD7";
    Experience_btn.style.borderBottom  = "none";
    skills_btn.style.borderBottom  = "none";
});


navigation = document.querySelector(".navigation");
close_menu = document.querySelector(".fa-xmark");
open_menu= document.querySelector(".fa-bars");

open_menu.addEventListener("click", function(){
    navigation.style.right = "0";
});

close_menu.addEventListener("click", function(){
    navigation.style.right = "-200px";
});

moon.addEventListener("click", function(){
    document.body.classList.toggle("moon-color");
    
    if(document.body.classList.contains("moon-color")){
        moon.className = "fa-solid fa-circle-half-stroke";
        moon.style.cursor = "pointer";
        moon.style.marginLeft = "50px";
        moon.style.fontSize = "1.5rem";
        main.style.background = "none";
        moon.style.color = "#FFFFFF";

    }else{
        moon.className = " fa-solid fa-circle-half-stroke fa-rotate-180 moon";
        moon.style.color = "#27374D";
        main.style.background = "url(img/photoo.jpg) no-repeat";
        main.style.backgroundSize = "cover";
        main.style.backgroundPosition = "center";
        main.style.backgroundAttachment = "fixed";
    }
    
});




