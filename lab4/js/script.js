function colocarCar(text) {
    var textoActual = document.getElementById("txt_val").value;
    if(textoActual.length === 0){
        document.getElementById("txt_val").value = text;
    }else if(textoActual=="0"){
        document.getElementById("txt_val").value = text;
    }else{
        document.getElementById("txt_val").value = textoActual + text;
    }
}

function procVals(){
    var values = document.getElementById("txt_val").value;
    total = eval(values);
    document.getElementById("txt_val").value = total;
}

function clean() {
    document.getElementById("txt_val").value = "0";
}

function noTeclado(){
  document.onkeydown = function (e) {
        alert("Por favor utilice las teclas de la calculadora");
        return false;
    }
}