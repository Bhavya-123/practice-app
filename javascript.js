function restbill(){
   
    const Total=document.getElementById("total").value;
    const Rate=document.getElementById("rate").value;

    const Tip=parseFloat(Total*(Rate/100));
    const Taxrate=5.5;
    const Tax=parseFloat(Total*(Taxrate/100));
    const Grandtotal=+Total+Tip+Tax;

    document.getElementById("tip").innerHTML=Tip.toFixed(2);
    document.getElementById("tax").innerHTML=Tax.toFixed(2);
    document.getElementById("grandtotal").innerHTML=Grandtotal.toFixed(2);
    
    
}
    
    
    
    
    
