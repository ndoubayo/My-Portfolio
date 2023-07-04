// Mode d'affichage( jour ou nuit)
console.log('Franck')
//page index
const bodyBackground = document.querySelector('body');
const headerBackground = document.querySelector(".navbar")
const navLinksBackground = document.querySelector('.navbar-nav li')
const modeBtnBackground = document.querySelector('.mode')
const modeBtnColor = document.querySelector('.mode .fa-solid')
const greetingsColor = document.querySelector('.greetings')
const greetingsBackground = document.querySelector('#greeting')
const presentationColor = document.querySelector('.presentation')
const nameInPresentation = document.querySelector('.name')
const jobInPresentation = document.querySelectorAll('.job')
const firstBanerBackground = document.querySelectorAll('.dark-baner')
const textBanerColor = document.querySelector('.baner-about-me')
const spansInFirstTextcolor = document.querySelectorAll('.text-about-me span')
const downlodBtnBackground = document.querySelector('.button')
const downlodBtnBackgroundHovered = document.querySelector('.button:hover')
const downlodBtnColor = document.querySelector('.button')
const downlodBtnIconColor = document.querySelector('.icon')
const secondTextAboutMeColor = document.querySelector('.second-text-about-me')
const spansInSecondTextcolor = document.querySelectorAll('.second-text-about-me span')
const sectionContactBackground = document.querySelector('#section4')
const indicationTextColor = document.querySelector('.indication')
const indicationImageContainerbacground = document.querySelector('.img-contact')
const contactContainerColor = document.querySelector('.contacts-container')
const listContactsColor = document.querySelector('.contacts-container .list-inline li a ')

//page skills
const skillsContainerBackground = document.querySelector('.skills-container');
const skillsRoomsBackground = document.querySelectorAll('.skills-room')
const skillsImgShadow = document.querySelectorAll('.skills-room img')
const skillsNamesColor = document.querySelectorAll('.skill-name')
const progressSkillBackground = document.querySelectorAll('.progress-skill')

//page projects
const projectsContainerBackground = document.querySelector('#projets-section .container')
const arrowsBackground = document.querySelectorAll('.arrows')
const arrowsColor = document.querySelectorAll('.arrows')
const projectDescriptionBackground = document.querySelectorAll('.project-description')
const projectDescriptionColor = document.querySelectorAll('.project-description');


const listToDarkColor =[
    modeBtnColor,
    greetingsColor,
    textBanerColor,
    spansInFirstTextcolor,
    indicationTextColor,
    contactContainerColor,
    listContactsColor
]
const listToDarkBackground = [
    bodyBackground,
    downlodBtnBackground,
    indicationImageContainerbacground
]
// const allBgtoDark =[
//     firstBanerBackground
// ]
const allColorToDark = [
    skillsNamesColor
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
    for( let fonts of allColorToDark){
        fonts.forEach(element =>{
            element.style.color = '#244548'
        })
    }
}

const listTolightColor = [
    downlodBtnColor,
    presentationColor,
    nameInPresentation,
    jobInPresentation,
    secondTextAboutMeColor,
    indicationTextColor,
    contactContainerColor
]
const listTolightBackground = [
    skillsContainerBackground,
    greetingsBackground,
    modeBtnBackground
]
const allBgtolight =[
    firstBanerBackground,
    progressSkillBackground
]

const allSpansFirst =[
    spansInFirstTextcolor
]
const allSpansSecon =[
    spansInSecondTextcolor
]

function backgroundToLight(){
    for ( let background1 of listTolightBackground){
        background1.style.background = '#05c4a7'
    }
    for( let backgrounds1 of allBgtolight){
        backgrounds1.forEach(element =>{
            element.style.background = '#05c4a7'
        })
    }
}
function fontsToLight(){
    for ( let font1 of listTolightColor){
        font1.style.color = '#05c4a7'
    }
    // for( let fonts1 of allBgtolight){
    //     fonts1.forEach(element =>{
    //         element.style.color = '#05c4a7'
    //     })
    // }
}

function allSpansToDark (){
    spansInFirstTextcolor.forEach(span =>{
        span.style.color = '#152147'
    })
}
function allSpansToLight (){
    spansInFirstTextcolor.forEach(span2 =>{
        span2.style.color = '#faa25a'
    })
}


function changeToDark(){
    backgroundToDark();
    fontsDark();
    allSpansToDark();
}
function changeToLight(){
    backgroundToLight();
    fontsToLight();
    allSpansToLight();
}

const moonBtn = document.querySelector('.fa-moon')
const sunBtn = document.querySelector('.fa-sun')
const ok = 'Utilisateur connecté!'
const modePermission = {
    user: ok
}
const permission = JSON.stringify(modePermission)


moonBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    window.sessionStorage.setItem('mode-nuit', permission)
    const getModeNuit = window.sessionStorage.getItem('mode-nuit')
    console.log('mode nuit')
    if (getModeNuit) {
        moonBtn.style.display = 'none'
        sunBtn.style.display = 'block';
        changeToDark();
        changeToLight();
    }
})
sunBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    window.sessionStorage.removeItem('mode-nuit')
    console.log('mode jour')
})