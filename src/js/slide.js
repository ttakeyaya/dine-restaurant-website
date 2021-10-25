const features = document.querySelector('.feature__list');

const familySection = document.getElementById('family');
const specialSection = document.getElementById('special');
const socialSection = document.getElementById('social');

const familyImgs = document.getElementById('familyimg');
const specialImgs = document.getElementById('specialimg');
const socialImgs = document.getElementById('socialimg');

const familyIndex = document.querySelector('.divider');
const specialIndex = document.querySelector('.divider2');
const socialIndex = document.querySelector('.divider3');
/**
 * Manage which sections are displayed
 * if it's open, true. 
 * */ 
let displayStatus = {
  family: true,
  special:false,
  social:false,
  
  changeTo(sectionName){
    for(let elem in this){
      sectionName === elem ? this[elem] = true : this[elem] = false;
    }
  }
}
// set change method to be enumerable-false. 
Object.defineProperty(displayStatus, "changeTo", {
  enumerable:false
});
// 

features.addEventListener('click', (e) =>{
  let targetName = e.target.innerText;
  if(targetName === "FAMILY GATHERING"){
    displayStatus.changeTo("family");
  }else if(targetName === "SPECIAL EVENTS"){
    displayStatus.changeTo("special");
  }else{
    displayStatus.changeTo("social");
  }
  renderByStatus(displayStatus);
});

function renderByStatus(displayStatus){
  if(displayStatus.family){
    familySection.classList.remove('hide');
    specialSection.classList.add('hide');
    socialSection.classList.add('hide');

    familyImgs.classList.remove('hide');
    specialImgs.classList.add('hide');
    socialImgs.classList.add('hide');

    familyIndex.classList.remove('hide');
    specialIndex.classList.add('hide');
    socialIndex.classList.add('hide');
  }else if(displayStatus.special){
    familySection.classList.add('hide');
    specialSection.classList.remove('hide');
    socialSection.classList.add('hide');

    familyImgs.classList.add('hide');
    specialImgs.classList.remove('hide');
    socialImgs.classList.add('hide');

    familyIndex.classList.add('hide');
    specialIndex.classList.remove('hide');
    socialIndex.classList.add('hide');

  }else if(displayStatus.social){
    familySection.classList.add('hide');
    specialSection.classList.add('hide');
    socialSection.classList.remove('hide');

    familyImgs.classList.add('hide');
    specialImgs.classList.add('hide');
    socialImgs.classList.remove('hide');

    familyIndex.classList.add('hide');
    specialIndex.classList.add('hide');
    socialIndex.classList.remove('hide');
  }
}

