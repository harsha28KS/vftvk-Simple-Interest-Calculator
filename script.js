function compute()
{
    var p = document.getElementById("principal").value; 
    var r = document.getElementById("rate").value;
    var t = document.getElementById("years").value;
    var nt = 2020 + parseInt(t); 
    var si = parseInt((p*t*r)/100);
    
    document.getElementById("result").innerHTML = 
    "If you deposit " + p + ", <br/>" +
    "at an interest rate of " + r + "%. <br/>" +
    "You will receive an amount of " + si + ", <br/>" +
    "in the year " + nt;
}
        