var url = "http://data.fixer.io/api/latest?access_key=c77a840597a7934b06ef954af80a337c&base=EUR&symbols=GBP,JPY,EUR,USD"
function recupererValue(){
    $.ajax({
        url: url,
        type : "GET",    
    success: function(res, status, req){ 
            var rates = res.rates
            ,   fromAmount = document.getElementById("fromAmount").value
            ,   from = document.getElementById('from').value
            ,   to= document.getElementById('to').value;
            var result = fromAmount * rates[to] / rates[from];

           // console.log(result);
            document.getElementById("toAmount").value = result;

    }// Callback    
    
    })
}
