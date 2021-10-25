import { validate} from "./helpers.js";

const form = document.forms.reservation;

// DOMs for changing the number of reservations
const minusBtn = form.decrease;
const plusBtn = form.increase;
const submitBtn = form.submitBtn;
let numberOfReservations = document.getElementById('reservationNum');
let currentNum = 0;

// input fields
const name = document.getElementById('name');
const email = document.getElementById('email');
const dateField = document.getElementById('date');
const timeField = document.getElementById('time');

// store the user input  to pass the validation function.
let currentCustomerInput = {
  "customer": null,
  "customerEmail":null,
  "date": null,
  "times":null,
  "space":null,
};

// as "MAkE RESERVATION" btn clicked
// TODO refactor
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
    name.lastElementChild.classList.add('alert-show');
  }else{
    form.name.classList.remove('alert');
    name.lastElementChild.classList.remove('alert-show');
  }
  if(!validationStatus.email){
    form.email.classList.add('alert');
    email.lastElementChild.classList.add('alert-show');
  }else{
    form.email.classList.remove('alert');
    email.lastElementChild.classList.remove('alert-show');
  }
  if(!validationStatus.date){
    form.datemonth.classList.add('alert');
    form.dateday.classList.add('alert');
    form.dateyear.classList.add('alert');
    dateField.children[0].classList.add('alert-msg');
    dateField.firstElementChild.firstElementChild.classList.add('alert-show');
  }else{
    form.datemonth.classList.remove('alert');
    form.dateday.classList.remove('alert');
    form.dateyear.classList.remove('alert');
    dateField.children[0].classList.remove('alert-msg');
    dateField.firstElementChild.firstElementChild.classList.remove('alert-show')
  }
  if(!validationStatus.times){
    form.datehours.classList.add('alert');
    form.datemins.classList.add('alert');
    timeField.children[0].classList.add('alert-msg');
    timeField.firstElementChild.firstElementChild.classList.add('alert-show');
  }else{
    form.datehours.classList.remove('alert');
    form.datemins.classList.remove('alert');
    timeField.children[0].classList.remove('alert-msg');
    timeField.firstElementChild.firstElementChild.classList.remove('alert-show')
  }
});


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