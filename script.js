var total=0;
function btn(val){
     var btval =Number(val.innerHTML)
    var inp=document.getElementById("inp");
     total=inp.value+=btval
    //  console.log(total);
}
function op(val){
    opration=val.innerHTML;

    var inp=document.getElementById("inp");
    total=inp.value+=opration;
}
function equal(){
    var inp = document.getElementById("inp");
    var ans =eval(inp.value);
    inp.value = ans;
}
function cle(){
    var inp=document.getElementById("inp")
    var aa= inp.value = "";
}

// var adarsh=10+
// console.log(eval("2*adarsh"));

