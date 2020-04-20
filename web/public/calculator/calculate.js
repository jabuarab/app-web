let buttons = document.getElementsByTagName("button")
let firstTerm;
let operaSimb = 0;// 1=/, 2=*, 3 =-,  4=+,
let booleanState;
let readyanop;
let booleanNumber;
let counter =0;
let reset=true;

var elmnt = document.getElementById("container");
elmnt.offsetHeight= parseFloat(elmnt.offsetWidth)*0.54275;



function extra(btnid){
    if(btnid == "AC"){
        booleanState=false;
        booleanNumber=false;
        readyanop=false;
        operaSimb=0;
        firstTerm=0;
        counter=0;
        document.getElementById("display").innerText="";
    }
    if(btnid == "sign"){
        document.getElementById("display").innerText="-"+document.getElementById("display").innerText;

    }
    if(btnid == "percentage"){
        document.getElementById("display").innerText= parseFloat(document.getElementById("display").innerText)/100;
    } 
}

function igualdad(){

        if(operaSimb==4){
            let a=parseFloat(document.getElementById("display").innerText)+parseFloat(firstTerm)
            document.getElementById("display").innerText =a;
            console.log(document.getElementById("display").innerText);
        }
        if(operaSimb==3){
            let a=(parseFloat(firstTerm)-parseFloat(document.getElementById("display").innerText))
            document.getElementById("display").innerHTML= a ;
        }
        if(operaSimb==2){
            console.log(firstTerm);
            console.log(document.getElementById("display").innerText);
            let a=parseFloat(firstTerm)*parseFloat(document.getElementById("display").innerText)
            console.log(a);
            document.getElementById("display").innerText=a;
        }
        if(operaSimb==1){
            let a =parseFloat(firstTerm)/parseFloat(document.getElementById("display").innerText);
            document.getElementById("display").innerText= a;            
        }
        booleanState=false;
        booleanNumber=false;
        readyanop=false;
        operaSimb=0;
        firstTerm=0;
        counter=0;
        reset=true;
}
function operation(btnid){
    console.log(btnid);

    if(readyanop && booleanNumber){
        igualdad();
    }
   
    if(btnid=="add"){
        if(!readyanop){firstTerm=document.getElementById("display").innerText;}
        readyanop=true; 
        booleanState =true;
        operaSimb=4;
    }
    if(btnid=="rest"){
        if(!readyanop){firstTerm=document.getElementById("display").innerText;}
        readyanop=true;
        booleanState =true;
        operaSimb=3;
    }
    if(btnid=="product"){
     
        if(!readyanop){firstTerm=document.getElementById("display").innerText;}
        readyanop=true;
        booleanState =true;
        operaSimb=2;
    }
    if(btnid=="division"){
        
        if(!readyanop){firstTerm=document.getElementById("display").innerText;}
        readyanop=true;
        booleanState =true;
        operaSimb=1;
    }
    booleanNumber=false;
}


function addnumer(btnText){
    booleanNumber=true;
    if(booleanState || reset){
        document.getElementById("display").innerText="";
        booleanState = false;
        reset=false;
    }
    counter++;
    document.getElementById("display").innerText =document.getElementById("display").innerText+btnText;
}

//first difurcacion
function operar(btnClass,btnid){
    if(btnClass=="ext"){
        extra(btnid);
    }
    if(btnClass=="op"){
        operation(btnid);
        
    }
    if(btnClass=="number"){
       
        addnumer(btnid);
    }
}


//clickers
for(i=0;i<buttons.length;i++){
    let clase=buttons[i].className;
        
    let idd=buttons[i].id;
    if(clase=="number"){
        idd=buttons[i].innerText;
    }
    buttons[i].addEventListener("click", e => {        
        operar(clase,idd);
        elmnt.offsetHeight= parseFloat(elmnt.offsetWidth)*0.54275;        
    })
}

