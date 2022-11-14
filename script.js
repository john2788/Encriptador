const texto = document.querySelector(".input-txt");
const encriptado = document.querySelector(".input-txt-encriptado");
const copiar = document.querySelector(".btn-copiar");
const quitar1 = document.querySelector(".msj-no-encontrado")
const quitar2 = document.querySelector(".descriptar-img")
const mostrar1 = document.querySelector(".btn-copiar")



/*
 "e" pasa a ser "enter"`
 "i" pasa a ser "imes"`
 "a" pasa a ser "ai"`
 "o" pasa a ser "ober"`
 "u" pasa a ser "ufat"`
 */

 
function btnencriptar( ) {
    const texto1 = encriptar(texto.value);
    encriptado.value=texto1;
    encriptado.style= "none";
    texto.value = "";
    copiar.style.display = "block";
    quitar1.style.display = "none";
    quitar2.style.display = "none";
    mostrar1.style.display = "show"; 
   
}


function encriptar(stringtexto){ 
    let matrisregla =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringtexto = stringtexto.toLowerCase();
    for (let i = 0; i < matrisregla.length; i++) {
        if (stringtexto.includes(matrisregla[i] [0])){
            stringtexto = stringtexto.replaceAll(matrisregla[i][0],matrisregla[i][1]);
        }
    }
    return stringtexto;
}


function btndesencriptar(){
    const texto2 = desencriptar(texto.value);
    encriptado.value=texto2;
    encriptado.style.backgroundImage = "none";
    texto.value = "";
}

function desencriptar(stringtexto1){
    let matrisregla =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    for (let i = 0; i < matrisregla.length; i++) {
        if (stringtexto1.includes(matrisregla[i] [1])){
            stringtexto1 = stringtexto1.replaceAll(matrisregla[i][1],matrisregla[i][0]);
        }
    }
    return stringtexto1;
}


function btncopiar(){
    encriptado.select();
    navigator.clipboard.writeText(encriptado.value)
    encriptado.value = "";
    alert("Texto copiado")
}
