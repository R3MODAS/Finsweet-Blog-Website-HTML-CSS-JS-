let menu = document.getElementsByClassName("navbar-toggler")[0];
let navBox = document.querySelector(".nav-box");
let navLinks = document.querySelectorAll("#nav-links");


menu.addEventListener('click',()=>{
      navBox.classList.toggle("active");
      navLinks.forEach((value)=>{
            value.addEventListener('click',()=>{
                  navBox.classList.remove('active');
            })
      })
})

