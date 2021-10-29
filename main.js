//Selectores

const root = document.querySelector(".calculator__content");
const header = root.querySelector("#header");
const result = root.querySelector("#operation_");
const buttons = root.querySelector(".calculator__body")
const botonIgual = root.querySelector("#igual");

//Guardado de datos
let numeroUno = [];
let numeroDos = [];
let symbol = [];
let headerInfo = [];
let resultadoAnterior = [];

//Visual

const renderNumeroUno = ({target}) => {
    if (target.className !== "numero" || symbol.length !== 0) {
        return;
    }
    resultadoAnterior = [];
    numeroUno += Number(target.innerHTML);
    headerInfo += Number(target.innerHTML)
    header.innerHTML = headerInfo;
};

const renderSymbol = ({target}) => {
    if (target.className !== "--fn" || symbol.length !== 0 || (numeroUno.length == 0 && resultadoAnterior.length == 0)) {
        return;
    }
    if (resultadoAnterior.length !== 0) {
        numeroUno = resultadoAnterior;
        headerInfo = [];
        headerInfo += Number(resultadoAnterior)
        header.innerHTML = headerInfo;
    }
    symbol += target.innerHTML;
    headerInfo += target.innerHTML;
    header.innerHTML = headerInfo;
};

const renderNumerDos = ({target}) => {
    if (target.className !== "numero" || symbol.length == 0) {
        return;
    }
    numeroDos += Number(target.innerHTML);
    headerInfo += Number(target.innerHTML);
    header.innerHTML = headerInfo;
}

//Logica

const operaciones = ({target}) => {
    if (target.id !== "igual" || symbol.length == 0) {
        return;
    }
    if (symbol.length == 0) {
        result.innerHTML = Number(numeroUno)
    }
    if (symbol.trim() == "+") {
        result.innerHTML = Number(numeroUno) + Number(numeroDos);
        resultadoAnterior = Number(numeroUno) + Number(numeroDos);
        borrarIgual();
        return;
    }
    if (symbol.trim() == "-") {
        result.innerHTML = Number(numeroUno) - Number(numeroDos);
        resultadoAnterior = Number(numeroUno) - Number(numeroDos);
        borrarIgual();
        return;
    }
    if (symbol.trim() == "/") {
        result.innerHTML = Number(numeroUno) / Number(numeroDos);
        resultadoAnterior = Number(numeroUno) / Number(numeroDos);
        borrarIgual();
        return;
    }
    if (symbol.trim() == "x") {
        result.innerHTML = Number(numeroUno) * Number(numeroDos);
        resultadoAnterior = Number(numeroUno) * Number(numeroDos);
        borrarIgual();
        return;
    }
}

const borrarIgual = () => {
        numeroUno = [];
        numeroDos = [];
        symbol = [];
        header.innerHTML = [];
        headerInfo = [];
};

const borrarTodo = ({target}) => {
    if (target.className == "--border") {
        borrarIgual();
        resultadoAnterior = [];
        result.innerHTML = [];
    }
}

//Declaracion de eventos

const init = () => {
    buttons.addEventListener("click", renderNumeroUno);
    buttons.addEventListener("click", renderSymbol);
    buttons.addEventListener("click", renderNumerDos);
    buttons.addEventListener("click", operaciones);
    buttons.addEventListener("click", borrarTodo);
}

//Inicializador

init();