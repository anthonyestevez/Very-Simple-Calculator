function calc(){
  let value1 = parseInt(document.querySelector('#value1').value);
  let value2 = parseInt(document.querySelector('#value2').value);
  let operator = document.querySelector('#operator').value;
  let calculate;

  if(operator == "add"){
    calculate = value1 + value2;
  } else if (operator =="min"){
    calculate = value1 - value2;
  }else if(operator =="div"){
    calculate = value1 / value2;
  }else if(opertor =="mul"){
    calculate = value1 * value2
  }
document.querySelector("#result").innerHTML = calculate
}
