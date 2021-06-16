const btn = document.querySelectorAll(".btn");
const oper = document.querySelectorAll(".oper");
const result = document.querySelector(".result");
const calculate = document.querySelector(".equal");
const delNumber = document.querySelector(".delete");

let firstnum =  "";
let secondnum = "";
let operate = '';
let resultNum = 0;
let numberValue = "";

btn.forEach((el) => {
    el.addEventListener("click", getNumber);
})

oper.forEach((el) => {
    el.addEventListener("click", operateNumber);
})

delNumber.addEventListener("click", deleteNumber);

calculate.addEventListener("click", calculateResult);

function getNumber(e){
    const number =  e.target.textContent;
    
    if (!secondnum) {
        numberValue += number; 
        firstnum += number;
        result.innerHTML += number;
    } else if (secondnum) {
        numberValue += number;
        secondnum  = numberValue;
        result.innerHTML += number;
    }
}

function operateNumber(e) {
    calculateNumber();
    operate = e.target.textContent;
    result.innerHTML += operate;
    numberValue = "";
    secondnum = 1;
}

function calculateNumber() {
    let firstCalNum = parseInt(firstnum);
    let secondCalNum = parseInt(secondnum);
   
    if(secondnum) {
       switch (operate) {
     
         case "+":
            resultNum = firstCalNum + secondCalNum;
            break;
         case "-":
            resultNum = firstCalNum - secondCalNum;
            break;
         case "*":
            resultNum = firstCalNum * secondCalNum;
            break;
         case "/":
            resultNum = firstCalNum / secondCalNum;
            break;
         case "%":
            resultNum = firstCalNum % secondCalNum;
            break;
        }
    } else return -1;  
    
    firstnum = resultNum;
}

function calculateResult() {
    calculateNumber();
    result.innerHTML = resultNum;
}

function deleteNumber() {
    result.innerHTML = " ";
    resultNum = 0;
    firstnum = "";
    secondnum = "";
}