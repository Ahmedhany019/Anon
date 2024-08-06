let modal = document.querySelector("[data-modal]")
let btnX = document.querySelector("[data-modal-close]")
let overlay = document.querySelector("[data-modal-overlay]")

let modalCloseFunc = function(){
    modal.classList.add("closed")
}
overlay.addEventListener("click",modalCloseFunc)
btnX.addEventListener("click",modalCloseFunc)

// Notfiactions Toast
let notfiactionToast = document.querySelector("[data-toast]")
let notfiactionToastBtn = document.querySelector("[data-toast-close]")

notfiactionToastBtn.addEventListener("click",function(){
    notfiactionToast.classList.add("closed")
})




//mobile menu variables
let mobileMenuOpenBtn = document.querySelectorAll("[data-mobile-menu-open-btn]")
let mobileMenu = document.querySelectorAll("[data-mobile-menu]")
let mobileMenuCloseBtn = document.querySelectorAll("[data-mobile-menu-close-btn]")
let overlayBG = document.querySelector("[data-overlay]")

for(let i =0; i < mobileMenuOpenBtn.length; i++){

    let mobileMenuCloseFunc = function(){

        mobileMenu[i].classList.remove("active")
        overlayBG.classList.remove("active")
    }
    mobileMenuOpenBtn[i].addEventListener("click",function(){
        mobileMenu[i].classList.add("active")
        overlayBG.classList.add("active")
    })
    mobileMenuCloseBtn[i].addEventListener("click",mobileMenuCloseFunc)
    overlayBG.addEventListener("click",mobileMenuCloseFunc)

}

//accordion variables
let accordionBtn = document.querySelectorAll("[data-accordion-btn]")
let accordion = document.querySelectorAll("[data-accordion]")

for(let i = 0; i < accordionBtn.length; i++){

    accordionBtn[i].addEventListener("click",function (){

        let clickedBtn = this.nextElementSibling.classList.contains("active")

        for(let i =0; i< accordion.length; i++){

            if (clickedBtn) break;

            if(accordion[i].classList.contains('active')){

                accordion[i].classList.remove("active")
                accordionBtn[i].classList.remove("active")
            }

        }

        this.nextElementSibling.classList.toggle("active")
        this.classList.toggle("active")

    })
}