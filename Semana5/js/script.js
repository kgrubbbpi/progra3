// alert("Prueba desde el archivo externo")

function operacion(){
    // alert("OK");
    // variables tipado dinamico
    var var1 = parseInt(document.getElementById("txt_val").value);
    var ope = parseInt(document.getElementById("txt_operacion").value);
    var var2 = parseInt(document.getElementById("text_val2").value);
    var pow = parseInt(document.getElementById("txt_elevado").value);
    // var total = parseInt(var1+var2);
    var resultado = 0;
    // alert(total);
    switch (ope){
        case 1: //suma
            resultado = suma(var1, elevar(var2, pow));
            break;
        case 2: //resta
            resultado = resta(var1, elevar(var2, pow));
            break;
        case 3: //multiplicacion
            resultado = multi(var1, elevar(var2, pow));
            break;
        case 4: //division
            resultado = divi(var1, elevar(var2, pow));
            break;
        default:
            resultado = 0;
            break;
    }

    document.getElementById("html_resultado").innerHTML = "<b>" + resultado + "</b>";
}

function elevar(valor, potencia) {
    var resultado = 1;
    for(var i = 0; i < potencia; i++){
        resultado = resultado * valor;
    }
    return resultado;
}

function suma (p1, p2) {
    return p1 + p2;
}

function resta(p1, p2) {
    return p1 - p2;
}

function multi(p1, p2) {
    return p1 * p2;
}

function divi(p1, p2) {
    return p1 / p2;
}

function colocarNumero(text) {
    var textoActual = document.getElementById("txt_val").value;
    if(textoActual.length === 0){
        document.getElementById("txt_val").value = text;
    }else{
        document.getElementById("txt_val").value = textoActual + text;
    }
}