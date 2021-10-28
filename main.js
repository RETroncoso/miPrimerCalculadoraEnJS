//Selectores

const root = document.querySelector(".calculator__content");
const header = root.querySelector("#header");
const result = root.querySelector("#operation_");
const buttons = root.querySelector(".calculator__body")
const botonIgual = root.querySelector("#igual");

let headerInfo = [];

//Renderizado de numeros

const renderNumeroUno = ({target}) => {
    if (target.nodeName !== "BUTTON") {
        return;
    } else {
        let primerNumero = target.innerText;
        if (isNaN(primerNumero)) {
            return;
        }
        headerInfo += primerNumero;
        header.innerHTML = headerInfo;
    }
}

const renderSymbol = ({target}) => {
    if (target.nodeName !== "BUTTON") {
        return;
    } else {
        let symbol = target.innerText
        if (!isNaN(symbol) || headerInfo.length == 0 || symbol == "=" || symbol == "." || isNaN(headerInfo[headerInfo.length-1])) {
            return;
        }
        headerInfo += symbol;
        numeroUno += Number(header.innerText);
        tipoDeOperacion = headerInfo[headerInfo.length-1];
        header.innerHTML = headerInfo;
        headerInfo = "";
    }
}

const renderNumeroDos = ({target}) => {
    if (target.nodeName !== "BUTTON" || !isNaN(headerInfo[headerInfo.length-1])) {
        return;
    } else {
        let segundoNumero = target.innerText;
        if (isNaN(segundoNumero)) {
            return;
        }
        headerInfo += segundoNumero;
        header.innerHTML = headerInfo;
    }
}

//Logica de operaciones

let numeroUno = [];
let numeroDos = [];
let tipoDeOperacion;

const resultado = ({target}) => {
    if (target.nodeName !== "BUTTON" || target.id !== "igual") {
        return;
    }
    numeroDos += Number(header.innerText);
    let total;
    if (tipoDeOperacion == "+") {
        total = (Number(numeroUno) + Number(numeroDos));
        result.innerHTML = total;
        headerInfo = "";
        numeroUno = [];
        numeroDos = [];
    }
    if (tipoDeOperacion == "-") {
        total = (Number(numeroUno) - Number(numeroDos));
        result.innerHTML = total;
        headerInfo = "";
        numeroUno = [];
        numeroDos = [];
    }
    if (tipoDeOperacion == "x") {
        total = (Number(numeroUno) * Number(numeroDos));
        result.innerHTML = total;
        headerInfo = "";
        numeroUno = [];
        numeroDos = [];
    }
    if (tipoDeOperacion == "/") {
        total = (Number(numeroUno) / Number(numeroDos));
        result.innerHTML = total;
        headerInfo = "";
        numeroUno = [];
        numeroDos = [];
    }
}


//Declaracion de eventos

const init = () => {
    buttons.addEventListener("click", renderNumeroUno);
    buttons.addEventListener("click", renderSymbol);
    buttons.addEventListener("click", renderNumeroDos);
    buttons.addEventListener("click", resultado);
}

//Inicializador

init();