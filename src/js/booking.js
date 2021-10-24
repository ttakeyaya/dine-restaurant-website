import { validate} from "./helpers.js";

const form = document.forms.reservation;
// DOMs for changing the number of reservations
const minusBtn = form.decrease;
const plusBtn = form.increase;
const submitBtn = form.submitBtn;
let numberOfReservations = document.getElementById('reservationNum');
let currentNum = 0;
// 

// store the user input in order to pass the validation function.
let currentCustomerInput = {
  "customer": null,
  "customerEmail":null,
  "date": null,
  "times":null,
  "space":null,
};

submitBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  currentCustomerInput.customer = form.name.value;
  currentCustomerInput.customerEmail = form.email.value;
  currentCustomerInput.date = `${form.datemonth.value} / ${form.dateday.value} / ${form.dateyear.value}`;
  currentCustomerInput.times = `${form.datehours.value}:${form.datemins.value}`;
  currentCustomerInput.space = currentNum;

  let validationStatus = validate(currentCustomerInput);

  if(!validationStatus.name){
    form.name.classList.add('alert');
  }else{
    form.name.classList.remove('alert');
  }
  if(!validationStatus.email){
    form.email.classList.add('alert');
  }else{
    form.email.classList.remove('alert');
  }
  if(!validationStatus.date){
    form.datemonth.classList.add('alert');
    form.dateday.classList.add('alert');
    form.dateyear.classList.add('alert');
  }else{
    form.datemonth.classList.remove('alert');
    form.dateday.classList.remove('alert');
    form.dateyear.classList.remove('alert');
  }
  if(!validationStatus.times){
    form.datehours.classList.add('alert');
    form.datemins.classList.add('alert');
  }else{
    form.datehours.classList.remove('alert');
    form.datemins.classList.remove('alert');
  }
  // if(currentNum == 0){
  //   alert('fuck!');
  // }
})


// increase / decrease the number of reservations
minusBtn.addEventListener('click', e=>{
  e.preventDefault();
  if (currentNum <= 0) return;
  currentNum -= 1;
  numberOfReservations.innerText = currentNum;
});
plusBtn.addEventListener('click', e => {
  e.preventDefault();
  currentNum += 1;
  numberOfReservations.innerText = currentNum;
});

// function called when the file loaded
function init(){
  numberOfReservations.innerText = currentNum;
}


/**
 * 
 */
init();