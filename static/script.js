const menuMobile=document.querySelector(".menu-mobile"),body=document.querySelector("body");menuMobile.addEventListener("click",()=>{menuMobile.classList.contains("bi-list")?menuMobile.classList.replace("bi-list","bi-x"):menuMobile.classList.replace("bi-x","bi-list"),body.classList.toggle("menu-nav-active")});const navItem=document.querySelectorAll(".nav-item");navItem.forEach(a=>{a.addEventListener("click",()=>{body.classList.contains("menu-nav-active")&&(body.classList.remove("menu-nav-active"),menuMobile.classList.replace("bi-x","bi-list"))})});const item=document.querySelectorAll("[data-anime]"),animeScroll=()=>{var a=window.pageYOffset+.85*window.innerHeight;item.forEach(b=>{a>b.offsetTop?b.classList.add("animate"):b.classList.remove("animate")})};animeScroll(),window.addEventListener("scroll",()=>{animeScroll()});


