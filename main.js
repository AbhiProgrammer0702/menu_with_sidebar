var menu = document.querySelector(".menu-short");
var detailMenu = document.querySelector(".menu-detail");
menu.addEventListener("click",function(e){
    
    if(e.target.classList.contains("menu-short")){
        detailMenu.classList.add("animation");
    }
    console.log("ho gya");
});
detailMenu.addEventListener("click",function(e){
    if(e.target.classList.contains("menu-detail")){
        detailMenu.classList.remove("animation");
    }else{
        console.log("no")
    }
});
var navLinks = document.querySelectorAll(".nav-link-items a");
navLinks.forEach(function(element){
    element.addEventListener("click",function(e){
        navLinks.forEach(function(element){
            if(element.classList.contains("active")){
                element.classList.remove("active");
            }
        })
        element.classList.add("active");
    })
})
var navLinksPr = document.querySelectorAll(".nav-links a");
navLinksPr.forEach(function(element){
    element.addEventListener("click",function(e){
        navLinksPr.forEach(function(element){
            if(element.classList.contains("active")){
                element.classList.remove("active");
            }
        })
        element.classList.add("active");
    })
})