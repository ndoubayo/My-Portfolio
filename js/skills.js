//page skills
const bodyBackground = document.querySelector('body');
const skillsContainerBackground = document.querySelector('.skills-container');
const skillsRoomsBackground = document.querySelectorAll('.skills-room')
const skillsImgShadow = document.querySelectorAll('.skills-room img')
const skillsNamesColor = document.querySelectorAll('.skill-name')
const progressSkillBackground = document.querySelectorAll('.progress-skill')

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

const allBgtoDark =[
    skillsRoomsBackground
]
const allColorToDark = [
    skillsNamesColor,
    listContactsColor
]

function backgroundToDark(){
    for ( let background of listToDarkBackground){
        background.style.background = '#244548'
    }
    for ( let backgrounds of allBgtoDark){
        backgrounds.forEach(bg =>{
            bg.style.background = '#244548'
        })
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

function backgroundToDark2(){
    for ( let background of listToDarkBackground){
        background.style.background = '#244548'
    }
    for ( let backgrounds of allBgtoDark){
        backgrounds.forEach(bg =>{
            bg.style.background = '#244548'
        })
    }
}
 function fontsDark2(){
    for ( let font of listToDarkColor){
      font.style.color = '#244548'
    }
    for ( let fonts of allColorToDark){
        fonts.forEach(font =>{
            font.style.color= '#244548'
        })
    }
}
// const listTolightColor = [
//     indicationTextColor
// ]
const listTolightBackground = [
    skillsContainerBackground,
    greetingsBg,
    ctnrModeBg ,
    contactZonebg
]

const allBgtolight =[
    progressSkillBackground
]
const allColorTolight =[
    skillsNamesColor
]


function backgroundToLight(){
    for ( let background1 of listTolightBackground){
        background1.style.background = '#05c4a7'
    }
    for ( let bgs of allBgtolight){
        bgs.forEach(bg =>{
            bg.style.background = '#05c4a7'
            bg.style.border = 'none'
        })
    }
   
}
function fontsToLight(){
    for(let rooms of allColorTolight){
        rooms.forEach(room =>{
            room.style.color = '#05c4a7'
        })
    }
}

function changeToDark(){
    backgroundToDark();
    fontsDark();

}
function changeToLight(){
    backgroundToLight();
    fontsToLight();
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


/* Cards Animatiuon*/

const cards = document.querySelectorAll('.skills-room')

cards.forEach(card =>{
    card.addEventListener('mousemove', (e)=>{
        
        let elRect = card.getBoundingClientRect()

        let x = e.clientX - elRect.x
        let y = e.clientY - elRect.y

        let midCardWith = elRect.width / 2
        let midCardHeight = elRect.height / 2

        let angleY = - (x - midCardWith) / 4
        let angleX = (y - midCardHeight) / 4
        card.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
    })
    card.addEventListener('mouseleave',()=>{
        card.children[0].style.transform = `rotateX(25deg) rotateY(25deg) scale(1)`
    })
})


