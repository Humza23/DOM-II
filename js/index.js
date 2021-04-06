// Your code goes here
// ELEMENT SELECTORS BELOW!!!

const logoHeading = document.querySelector('h1');
const navLinks = document.querySelectorAll('a');

const busImg = document.querySelector('.intro img')

const mapImg = document.querySelector('.content-section img')

const riverImg = document.querySelector('.content-section.inverse-content img')

const boatImg = document.querySelector('.content-destination img')

const signUpButton = document.querySelectorAll('.btn')

const busText = document.querySelector('.intro p')
// console.log(busText)

// EVENT LISTENERS BELOW!!!!!

logoHeading.addEventListener('click', function(event){
    event.target.style.color = 'red';
})

navLinks[0].addEventListener('mouseover', function(event){
    event.target.style.color = 'blue'
})

navLinks[1].addEventListener('dblclick', function(event){
    event.target.style.fontSize = '4rem';
})

navLinks[2].addEventListener('mouseleave', function(event){
    event.target.style.fontSize = '0.3rem';
})
navLinks[3].addEventListener('mousedown', function(event){
    event.target.style.color = 'orange';
})

busImg.addEventListener('wheel', function(event){
    event.target.style.border = '1.5rem solid black';
})

document.addEventListener('keydown', function(event){
    if (event.key === 'Escape'){
    mapImg.style.border = '3rem solid blue';
    }
})

window.addEventListener('load', function(event){
    busText.style.fontFamily = 'cursive';
})

window.addEventListener('resize', function(event){
    riverImg.style.border = '3rem solid orange'
})

document.addEventListener('scroll', function(event){
    boatImg.style.width = '5rem';
})

signUpButton.forEach(function(elem){
    elem.addEventListener('click', function(event){
        event.target.style.color = 'green';
})
})