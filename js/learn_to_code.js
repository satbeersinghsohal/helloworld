var f1 = document.getElementById('f1');
var f2 = document.getElementById('f2');
var ans = document.getElementById('result');
var form = document.getElementById('iswhatpecente');

var choice=1;
function question() {
    var x = document.getElementById('select1');
    if(x.value == 'whatisyofx'){
        p1.innerText= "what is ";
        p2.innerText= "% of ";
        p3.innerText= "?";
        choice =1;
    }
    else if(x.value == 'xisyofwhat'){
        p1.innerText = "";
        p2.innerText = "is ";
        p3.innerText = " % of what ?";
        choice =2;
    }
    else if(x.value == 'whatofxisy'){
        p1.innerText = "what % of";
        p2.innerText = "is ";
        p3.innerText = " ?";
        choice =3;
    }
    else if(x.value == 'xisy'){
        p1.innerText = "";
        p2.innerText = "% of what is ";
        p3.innerText = " ?";
        choice =4;
    }
    else if(x.value == 'yofxiswhat'){
        p1.innerText = "";
        p2.innerText = "% of ";
        p3.innerText = " is what ?";
        choice =5;
    }
}

function calculate(a,b) {
    if(choice==1||choice==5){
        result = a*b;
        return result/100;
    }
    else if(choice==2){
        result = a/b;
        return result*100;
    }
    else if(choice==3||choice==4){
        result = b/a;
        return result*100;
    }
}
form.addEventListener('submit', function (event) {
    if(!f1.value || !f2.value){
        alert("Please enter value in the field");
    }else{
        var a = parseFloat(f1.value);
        var b = parseFloat(f2.value);
        ans.innerText = "Result: " + calculate(a,b) +"%";
        event.preventDefault();
    }
});
