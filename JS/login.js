// step - 1: set event handler

document.getElementById('btn-login').addEventListener('click', function(event){
    // step - 2: Prevent default behavior (prevent loading browser)
    event.preventDefault();
    

    // step -3: get the phone number
    const phoneNumber = document.getElementById('mobile-number').value;
    


    // step - 4: get the pin number

    const pinNumber = document.getElementById('pin-number').value;
    console.log(`Phone number: ${phoneNumber}
Pin Number: ${pinNumber}`);

        if(phoneNumber === '01788172639' && pinNumber === '172639'){
            console.log('You are logged in');
            window.location.href = '/home.html';
        }
        else{
            alert('Wrong phone number or pin')
            
        }
})