"use strict";

window.onload = init;

function init() 
{
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.onclick = calculateButtonOnClick;
}

function calculateButtonOnClick()
{
    const paymentAmount = document.getElementById("numberField1");
    const interestRate = document.getElementById("number2Field");
    const numberOfPayments = document.getElementById("number3Field");

    let num1AsString = number1Field.value;
    let num2AsString = number2Field.value;
    let num3AsString = number3Field.value;


    let monthlyPayout = Number(num1AsString);
    let interestRatePercent = Number(num2AsString);
    let years = Number(num3AsString);
    let interestRatePercentMonthly = interestRatePercent / 1200;
    let lengthYears = years * 12;

    
    let investToday = monthlyPayout * ((1-Math.pow((1+interestRatePercentMonthly), -lengthYears)) / interestRatePercentMonthly);
    let answer = investToday;

    const answerField = document.getElementById("answerField");
    answerField.value = answer;
}