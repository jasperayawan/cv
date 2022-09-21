/**  const header = document.querySelector('header')


function stickyNavbar(){
    header.classList.toggle('scrolled', window.pageYOffset > 0);
}

window.addEventListener('scroll', stickyNavbar);  */

const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
         if(entry.isIntersecting){
             document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
             document.querySelectorAll(".animated")[1].classList.add("fadeInTop");
         }
     })
})

observer.observe(document.querySelector(".about-content"));

const observers = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".animates")[0].classList.add("fadeLeft");
            document.querySelectorAll(".animates")[1].classList.add("fadeRight");
        }
    })
})

observers.observe(document.querySelector(".homeFlex"));

const observerSkills = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".animate")[0].classList.add("fadeInSkills");
        }
    })
})

observerSkills.observe(document.querySelector(".skills"));


const observerFooter = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".animateds")[0].classList.add("fadeInFooter");
        }
    })
})

observerFooter.observe(document.querySelector(".footer"));






// lEARN MORE TEXT

const btnLearnmore = document.querySelector('.btn-learnmore')
const hiddenContent = document.querySelector('.hidden-content')

function contentReveal(){
    if(hiddenContent.classList.contains('btn-learnmore')
    ){
        hiddenContent.classList.remove('btn-learnmore')
    } else {
        hiddenContent.classList.add('btn-learnmore')
    }
}

btnLearnmore.addEventListener('click', contentReveal)



// BUTTON HELLO

const buttonHello = document.querySelector('.btn-hello')


function helloAlert() {
    prompt('Enter your full name: ');
    alert('Crush kita!')
}

buttonHello.addEventListener('click', helloAlert)


// Loader


var loader = document.querySelector(".loader");

window.addEventListener("load", vanish);

function vanish(){ 
    loader.classList.add("disppear");
} 
