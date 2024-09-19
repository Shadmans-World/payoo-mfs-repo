// Add money to the account

document.getElementById('btn-add-money').addEventListener('click',function(event){
    // prevent page reload after submit
    event.preventDefault();
    var addMoneyInput = document.getElementById('input-add-money').value;
    const pinNumberInput =document.getElementById('input-pin-number').value;
    // const pinNumber = document.getElementById('pin-number').value;
    var balance = document.getElementById('available-money').innerText;

    balance = parseFloat(balance);
    addMoneyInput= parseFloat(addMoneyInput);
    if(pinNumberInput==='172639'){
        var newBalance = balance + addMoneyInput;
       

        // update the balance in the UI

        document.getElementById('available-money').innerText = newBalance;

    }
    else{
        alert('wrong pin')
    }
 
})


// Cash Out 
document.getElementById('btn-cout-money').addEventListener('click',function(event){
    // prevent page reload after submit
    event.preventDefault();
    var cOutMoneyInput = document.getElementById('input-cout-money').value;
    const pinNumberInput =document.getElementById('cout-pin-number').value;
    
    var balance = document.getElementById('available-money').innerText;

    balance = parseFloat(balance);
    cOutMoneyInput= parseFloat( cOutMoneyInput);
    if(pinNumberInput==='172639'){
        var newBalance = balance - cOutMoneyInput;
       

        // update the balance in the UI

        document.getElementById('available-money').innerText = newBalance;

    }
    else{
        alert('wrong pin')
    }
 
})