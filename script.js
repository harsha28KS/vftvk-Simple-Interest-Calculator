function compute()
{
    var principal = document.getElementById("principal").value; 
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    if(principal<= 0){
        alert("Enter a positive integer");
        document.getElementById("principal").focus();
    }
    else{
        var year = 2020 + parseInt(years); 
        var si = parseInt((principal*years*rate)/100);
        document.getElementById("result").innerHTML = 
        "If you deposit <span class='highlight'>" + principal + "</span>, <br/>" +
        "at an interest rate of <span class='highlight'>" + rate + "%</span> . <br/>" +
        "You will receive an amount of <span class='highlight'>" + si + "</span>, <br/>" +
        "in the year <span class='highlight'>" + year +"</span>";
    }
    
}
        