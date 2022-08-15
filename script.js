var inputDate = document.querySelector(".input-date")
var inputnumber = document.querySelector(".input-number")
var buttonCheck = document.querySelector(".btn-check")
var finalOutput = document.querySelector(".final-output")

buttonCheck.addEventListener("click", checkDOB)


function checkDOB() {
    var dob = inputDate.value;
    var number = Number(inputnumber.value);
    var sum = calculateSum(dob);
    if (sum&&dob)
    comparing(sum, number)
    else
    finalOutput.innerText="Please enter both the fields"
}
function comparing(sum,number){
    if (sum%number===0){
        finalOutput.innerText=("Your birthday is lucky 🚀 ")
    } else {
        finalOutput.innerText=("Your birthday is unlucky 😥")
    }
}

function calculateSum(dob) {
    dob = dob.replaceAll("-","");
    var sum = 0;
    for (var i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}