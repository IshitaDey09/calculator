
/*addition of two digits */


function addBy()

{
    
    num1 = parseInt(document.getElementById("first").value);
    num2 = parseInt(document.getElementById("second").value);
    res = num1 + num2;
    document.getElementById("result").innerHTML = res;
    
}

/*division of two digits */

function divBy()

{
    num1 = parseInt(document.getElementById("first").value);
    num2 = parseInt(document.getElementById("second").value);
    res = num1 / num2;
    document.getElementById("result").innerHTML = res;
    
    
    
}

/*percentage of two digits */

function perBy()

{
    num1 = parseInt(document.getElementById("first").value);
    num2 = parseInt(document.getElementById("second").value);
    res = (num1+num2)/2 ;
    document.getElementById("result").innerHTML = res + "%";
    
    
}

/*addition of three digits */

function addition()

{
    
    num1 = parseInt(document.getElementById("first").value);
    num2 = parseInt(document.getElementById("second").value);
    num3 = parseInt(document.getElementById("third").value);
    res =  num1 + num2 + num3;
    document.getElementById("result1").innerHTML = res;
    
}

/*division of three digits */


function division()

{
    num1 = parseInt(document.getElementById("first").value);
    num2 = parseInt(document.getElementById("second").value);
    num3 = parseInt(document.getElementById("third").value);
    res = (num1 / num2)/num3;
    document.getElementById("result1").innerHTML = res;
    
    
    
}


/*percentage of three digits */


function percentage()

{
    num1 = parseInt(document.getElementById("first").value);
    num2 = parseInt(document.getElementById("second").value);
    num3 = parseInt(document.getElementById("third").value);
    res =  (num1+num2+num3)/3;
    document.getElementById("result1").innerHTML = res + "%";
    
    
}




