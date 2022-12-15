"use strict";

window.onload = init;

function init() 
{
    const convertButton1 = document.getElementById("convertButton1");
    convertButton1.onclick = convertButton1OnClick;
    const convertButton2 = document.getElementById("convertButton2");
    convertButton2.onclick = convertButton2OnClick;
}

function convertButton1OnClick()
{
    const numberField1 = document.getElementById("numberField1");
    const numA = 1.8;
    const numB = 32;

    let num1AsString = numberField1.value;


    let num1AsNumber = Number(num1AsString);

    let answer = (num1AsNumber * numA) + numB ;

    const answerField1 = document.getElementById("answerField1");
    answerField1.value = answer;
}

function convertButton2OnClick()
{
    const numberField2 = document.getElementById("numberField2");
    const numA = 5/9;
    const numB = 32;

    let num2AsString = numberField2.value;


    let num2AsNumber = Number(num2AsString);

    let answer = (num2AsNumber - numB) * numA ;

    const answerField2 = document.getElementById("answerField2");
    answerField2.value = answer;
}