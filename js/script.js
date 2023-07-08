// Mode d'affichage( jour ou nuit)

//page index
const bodyBackground = document.querySelector('body');
const ctnrModeBg = document.querySelector('.mode')
const modeBtnColor = document.querySelector('.mode .fa-solid')
const greetingsBg = document.querySelector('.greetings')
const greetingsColor = document.querySelector('#greeting')
const presentationColor = document.querySelector('.presentation')
const nameInPresentationColor = document.querySelector('.name')
const jobInPresentationColor = document.querySelectorAll('.job')/*** */
const darkBgs = document.querySelectorAll('.bg-trans')/** */
const textBanerColor = document.querySelector('.baner-about-me')
const spansInFirstTextcolor = document.querySelectorAll('.text-about-me span')/** */
const downloadBtnBg = document.querySelector('.button')
const downloadBtnTextColor = document.querySelector('.text')
const downlodBtnIconColor = document.querySelector('.icon')

const secondTextAboutMeColor = document.querySelector('.second-text-about-me')
const spansInSecondTextcolor = document.querySelectorAll('.second-text-about-me span')/** */
// const sectionContactBackground = document.querySelector('#section4')
const indicationTextColor = document.querySelector('.indication')
const indicationImageContainerbacground = document.querySelector('.img-contact')
const contactZone = document.querySelector('#section4')
const contactContainerColor = document.querySelector('.contacts-container')
const listContactsColor = document.querySelectorAll('.contacts-container .list-inline li a ')


const listToDarkColor =[
    modeBtnColor,
    greetingsColor,
    presentationColor,
    nameInPresentationColor,
    contactContainerColor,
    textBanerColor,
    indicationTextColor,
    contactContainerColor
]
const listToDarkBackground = [
    bodyBackground,
    indicationImageContainerbacground,
    downloadBtnBg,
]

const allJobstoDark =[
    jobInPresentationColor
]
const allColorToDark = [
    spansInFirstTextcolor,
    listContactsColor
]
const allSpansSecond =[
    spansInSecondTextcolor
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
    for(let span of allColorToDark){
        span.forEach(span =>{
            span.style.color = '#000000'
        })
    }
    for(let span of allJobstoDark){
        span.forEach(span =>{
            span.style.color = '#244548'
        })
    }
    for(let span of allSpansSecond){
        span.forEach(span =>{
            span.style.color = '#faa25a'
        })
    }
}

const listTolightColor = [
    downloadBtnTextColor,
    downlodBtnIconColor,
    secondTextAboutMeColor
]
const listTolightBackground = [
    greetingsBg,
    ctnrModeBg,
    contactZone
]
const allBgtolight =[
    darkBgs
]

function backgroundToLight(){
    for ( let background1 of listTolightBackground){
        background1.style.background = '#05c4a7'
    }
    for ( let bgs of allBgtolight){
        bgs.forEach(bg=>{
            bg.style.background = '#05c4a7'
        })
    }
    darkBgs.forEach(bg=>{
        bg.style.background = '#05c4a7'
    })
}
function fontsToLight(){
    for ( let font1 of listTolightColor){
        font1.style.color = '#05c4a7'
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
    e.preventDefault()
    window.sessionStorage.setItem('mode-nuit', permission)
    moonBtn.style.display = 'none';
    sunBtn.style.display = 'block';
    sunBtn.style.color = '#244548';
    changeToDark();
    changeToLight();
})

const getModeNuit = window.sessionStorage.getItem('mode-nuit')
if (getModeNuit) {
    moonBtn.style.display = 'none';
    sunBtn.style.display = 'block';
    sunBtn.style.color = '#244548';
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

