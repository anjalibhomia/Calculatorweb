"use strict";

window.onload = init;

function init() 
{
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.onclick = calculateButtonOnClick;
}

function calculateButtonOnClick()
{
    const principal = document.getElementById("numberField1");
    const interestRate = document.getElementById("number2Field");
    const length = document.getElementById("number3Field");

    let num1AsString = number1Field.value;
    let num2AsSrting = number2Field.value;
    let num3AsString = number3Feld.value;

    let principalLoan = Number(num1AsString);
    let interestRatePercent = Number(num2AsString);
    let lengthYears = Number(num3AsString);
    let interestRatePercentMonthly = interestRatePercent / 1200;
    let lengthMonth = lengthYears *12;

    
    let monthlyPayment = 
        principalLoan * 
            (
                interestRatePercentMonthly 
                /
                (1 - Math.pow( (1 + interestRatePercentMonthly) , -lengthMonth))
            );
    let answer = monthlyPayment;

    const answerField = document.getElementById("answerField");
    answerField.value = answer;
}