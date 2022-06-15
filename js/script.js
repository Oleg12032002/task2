

document.addEventListener("DOMContentLoaded", () => {


    let a = document.querySelector(".nav-b-menu");

    a.addEventListener("click", () => {
        let b = document.querySelector(".nav-menu");
        if(b.style.display == "block") {
            b.style.display = "none";
            document.querySelector("body").style.overflow = "auto";
            document.querySelector(".dimmed-filter").style.display = 'none';
        } else {
            console.log(document.querySelector(".header-working-hours-popab"));
            b.style.display = "block";
            document.querySelector("body").style.overflow = "hidden";
            document.querySelector(".dimmed-filter").style.display = 'block';
        };
    })
});