//page skills
const bodyBackground = document.querySelector('body');

const indicationTextColor = document.querySelector('.indication')
const indicationImageContainerbacground = document.querySelector('.img-contact')

const ctnrModeBg = document.querySelector('.mode')
const modeBtnColor = document.querySelector('.mode .fa-solid')
const greetingsBg = document.querySelector('.greetings')
const greetingsColor = document.querySelector('#greeting')

const contactZonebg = document.querySelector('#section4')
const contactContainerColor = document.querySelector('.contacts-container')
const listContactsColor = document.querySelectorAll('.contacts-container .list-inline li a ')

//Listes
const listToDarkColor =[
    modeBtnColor,
    greetingsColor,
    indicationTextColor,
    contactContainerColor
]
const listToDarkBackground = [
    bodyBackground,
    indicationImageContainerbacground
]

const allColorToDark = [
    listContactsColor
]

function backgroundToDark(){
    for ( let background of listToDarkBackground){
        background.style.background = '#244548'
    }
}
 function fontsDark(){
    for ( let font of listToDarkColor){
      font.style.color = '#244548'
    }
    for ( let fonts of allColorToDark){
        fonts.forEach(font =>{
            font.style.color= '#244548'
        })
    }
}


const listTolightBackground = [
    greetingsBg,
    ctnrModeBg ,
    contactZonebg
]

function backgroundToLight(){
    for ( let background1 of listTolightBackground){
        background1.style.background = '#05c4a7'
    }
}

function changeToDark(){
    backgroundToDark();
    fontsDark();

}
function changeToLight(){
    backgroundToLight();
}

const moonBtn = document.querySelector('.fa-moon')
const sunBtn = document.querySelector('.fa-sun')
const ok = 'Utilisateur connecté!'
const modePermission = {
    user: ok
}
const permission = JSON.stringify(modePermission)


moonBtn.addEventListener('click', (e) => {
    window.sessionStorage.setItem('mode-nuit', permission)
    moonBtn.style.display = 'none'
    sunBtn.style.display = 'block';
    sunBtn.style.color = '#244548'
    changeToDark();
    changeToLight();
    
})
const getModeNuit = window.sessionStorage.getItem('mode-nuit')
if (getModeNuit) {
    moonBtn.style.display = 'none'
    sunBtn.style.display = 'block';
    sunBtn.style.color = '#244548'
    changeToDark();
    changeToLight();
}
sunBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    window.sessionStorage.removeItem('mode-nuit')
    moonBtn.style.display = 'block'
    sunBtn.style.display = 'none';
    location.reload(true)

})



//Sliders
const projects = document.querySelectorAll('.project');
const nbSlide = projects.length;
const next = document.querySelector('.right-icon');
const prev = document.querySelector('.left-icon');
let count = 0;

function slideSuivante(){
    projects[count].classList.remove('active');
    projects[count].classList.remove('next');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

   projects[count].classList.add('active')
   projects[count].classList.add('next')
    console.log(count);

}
next.addEventListener('click', slideSuivante)


function slidePrecedente(){
   projects[count].classList.remove('active');
   projects[count].classList.remove('prev');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

   projects[count].classList.add('active')
   projects[count].classList.add('prev')

}
prev.addEventListener('click', slidePrecedente)

function keyPress(e){
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)
