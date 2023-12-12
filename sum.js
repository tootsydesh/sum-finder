
function sum(){
        var a= parseFloat(document.getElementById('a').value);
        var b= parseFloat(document.getElementById('b').value);
        var result= a+b;
        document.getElementById('result').innerHTML = "The sum is: " + result;
    }