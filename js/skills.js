//page skills
const skillsContainerBackground = document.querySelector('.skills-container');
const skillsRoomsBackground = document.querySelectorAll('.skills-room')
const skillsImgShadow = document.querySelectorAll('.skills-room img')
const skillsNamesColor = document.querySelectorAll('.skill-name')
const progressSkillBackground = document.querySelectorAll('.progress-skill')

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
    indicationImageContainerbacground
]

// const allBgtoDark =[
//     firstBanerBackground
// ]
// const allColorToDark = [
//     skillsNamesColor
// ]

function backgroundToDark(){
    for ( let background of listToDarkBackground){
        background.style.background = '#244548'
    }
    skillsRoomsBackground.forEach(room => {
        room.style.background = '#244548'
    })
}
 function fontsDark(){
    for ( let font of listToDarkColor){
      font.style.color = '#244548'
    }
    skillsNamesColor.forEach(element =>{
        element.style.color = '#244548'
    })
}

const listTolightColor = [
    downloadBtnColor,
    presentationColor,
    nameInPresentationColor,
    secondTextAboutMeColor,
    indicationTextColor,
    contactContainerColor
]
const listTolightBackground = [
    skillsContainerBackground,
    greetingsBg,
    ctnrModeBg
]

// const allBgtolight =[
//     firstBanerBackground,
//     progressSkillBackground
// ]

// const allSpansFirst =[
//     spansInFirstTextcolor
// ]
// const allSpansSecon =[
//     spansInSecondTextcolor
// ]

function backgroundToLight(){
    for ( let background1 of listTolightBackground){
        background1.style.background = '#05c4a7'
    }
    darkBgs.forEach(bg=>{
        bg.style.background = '#05c4a7'
    })
    progressSkillBackground.forEach(prog=>{
        prog.style.background = '#05c4a7'
    })
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

// function allSpansToDark (){
//     spansInFirstTextcolor.forEach(span =>{
//         span.style.color = '#152147'
//     })
// }
// function allSpansToLight (){
//     spansInFirstTextcolor.forEach(span2 =>{
//         span2.style.color = '#faa25a'
//     })
// }


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
        sunBtn.style.color = '#244548'
        // changeToDark();
        // changeToLight();
        greetingsBg.style.background = '#05c4a7';
        bodyBackground.style.background = '#244548';
        ctnrModeBg.style.background = '#05c4a7';
        contactZone.style.background = '#05c4a7';
        indicationImageContainerbacground.style.background = '#244548';
        downloadBtnBg.style.background = '#244548';
        // skillsContainerBackground.style.background = '#05c4a7';
        darkBgs.forEach(bg=>{
            bg.style.background = '#05c4a7'
        })
    }
})
sunBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    window.sessionStorage.removeItem('mode-nuit')
    console.log('mode jour')
})