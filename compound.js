"use strict";

window.onload = init;

function init() 
{
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.onclick = calculateButtonOnClick;
    const resetButton = document.getElementById("resetButton");
    resetButton.onclick = resetButtonOnClick;;
}

function calculateButtonOnClick()
{
    const deposit = document.getElementById("number1Field");
    const interestRate = document.getElementById("number2Field");
    const years = document.getElementById("number3Field");

    let num1AsString = number1Field.value;
    let num2AsString = number2Field.value;
    let num3AsString = number3Field.value;

    let depositAssuming = Number(num1AsString);
    let interestRatePercent = Number(num2AsString);
    let lengthYears = Number(num3AsString);
    let interestRatePercentMonthly = interestRatePercent / 1200;
    let lengthMonth = lengthYears *12;
    let days = 365;

    
    let futureValue = depositAssuming * Math.pow((1 + interestRatePercentMonthly / days), days * lengthMonth);

    let answer = futureValue;

    const answerField = document.getElementById("answerField");
    answerField.value = futureValue;
}

function resetButtonOnClick(){
    document.getElementById("resetButton").reset();
  }