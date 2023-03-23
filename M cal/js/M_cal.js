let result = document.getElementById('result');


function disply(val){
    result.value= result.value + val;
}


function clrsc(){
    result.value = "";
}


function backC(){
    result.value = result.value.slice(0,-1)
}


function cal(){
    var p = result.value;
    // eval() use to return the ans math fun
    var q = eval(p)
    result.value = q;
}