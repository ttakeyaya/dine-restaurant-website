/**
 * Only checks whether the input fields are empty.
 * 
 */

let validationStatus ={
  name: false,
  email: false,
  date:false,
  times:false,
  space:false,
}

/**
 * @returns validationStatus
 */
export function validate(input){
  if(!isEmpty(input.customer)){
    validationStatus.name = true;
  }else{
    validationStatus.name = false;
  }

  if(checkEmail(input.customerEmail)){
    validationStatus.email = true;
  }else{
    validationStatus.email = false;
  }

  if(checkDate(input.date)){
    validationStatus.date =true;
  } else{
    validationStatus.date =false;
  }

  if(checkTime(input.times)){
    validationStatus.times =true;
  } else{
    validationStatus.times =false;
  }

  if(checkSpace(input.space)){
    validationStatus.space=true;
  } else{
    validationStatus.space=false;
  }

  return validationStatus;
}

function isEmpty(input){
  if(input === ""){
    return true;
  }
  return false;
}

function checkEmail(email){
  const reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;
  if(reg.test(email)) return true;
  return false;
}

function checkDate(date){
  let dateArray = date.split('/');
  let month = dateArray[0];
  let day = dateArray[1];
  let year = dateArray[2];

  if(month ==" " || day ==" " || year == " ") return false;
  if(month >= 13 || month <= 0) return false;
  if(day >= 31 || day <= 0) return false;
  if(year <= 2021) return false;

  return true;
}

function checkTime(time){
  let timeArray = time.split(':');
  let hours = timeArray[0];
  let mins = timeArray[1];

  if(hours == "" || mins == "")  return false;
  return true;
}

function checkSpace(space){
  if(space <= 0 ) return false;
}