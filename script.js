let operator

function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}


function operate(operator,a,b){
    if (operator=="+"){
        return add(a,b)
    }

    else if(operator=="-"){
        return subtract(a,b)
    }
    else if(operator=="*"){
        return multiply(a,b)
    }

    else if(operator=="/"){
        return divide(a,b)
    }
}


const dis = document.querySelector(".display")
function display(value){
    dis.innerText= value
}

let val1
let val2
let math
let result
let count=0
const buttons = document.querySelectorAll("button")
let firstNumStr = "";
let secondNumStr = "";
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList[0] == "nos") {
            if (operator == null) {
                firstNumStr += button.innerText;
                val1 = display(firstNumStr);
            } else if(operator!=null){
                secondNumStr += button.innerText;
                val2 = display(secondNumStr);
            }
        }

        if(button.id=="decimal"){
            count++
            if(count>0){
                button.disabled= true
            }
        }
        if (button.classList[0] == "ope" && button.id !== "=") {
            if(operator!=null && secondNumStr != ""){
                result= operate(operator,Number(firstNumStr),Number(secondNumStr))
                display(result)
                firstNumStr= result.toString()
                secondNumStr=""
            }
            operator = button.innerText;
            math = display(operator);
        }
        if (button.id === "=") {
            result = operate(operator, Number(firstNumStr), Number(secondNumStr));
            display(result)
            firstNumStr = result;
            secondNumStr = "";
            operator = null;
        }

        if(button.classList[0]=="clear"){
            dis.innerHTML=""
            firstNumStr=""
            secondNumStr=""
            operator=null
            count=0
            document.getElementById("decimal").disabled = false;
        }

        if (button.classList[0] == "backspace") {
            if (secondNumStr !== "") {
                secondNumStr = secondNumStr.slice(0, -1); // Remove the last character from secondNumStr
                if (secondNumStr==""){
                    display(operator); // Display the updated secondNumStr
                }
                else{
                    display(secondNumStr)
                }
            } else if (operator !== null) {
                operator = null; // Reset operator if secondNumStr is empty
                display(firstNumStr);
            } else if (firstNumStr !== "") {
                firstNumStr = firstNumStr.slice(0, -1); // Remove the last character from firstNumStr
                display(firstNumStr); // Display the updated firstNumStr
            }
        }
    });
});