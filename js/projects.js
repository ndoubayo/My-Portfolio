
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
    // console.log(count);
    
}
prev.addEventListener('click', slidePrecedente)

function keyPress(e){
    console.log(e);
    
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)