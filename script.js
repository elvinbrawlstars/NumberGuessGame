let numberguess = Math.round(Math.random() * 100)
let tries = 0;

function numberguessfunction(){
    tries = tries + 1;
    displayTries.innerHTML = 'Versuche: ' + tries;

    if(numberguess < NumberInput.value){
        headline.innerHTML = 'Zahl ist zu Hoch';
    }

    if(numberguess > NumberInput.value){
        headline.innerHTML = 'Zahl ist zu Niedrig'
    }
    
    if(numberguess == NumberInput.value){
        headline.innerHTML = ' Du hast Gewonnen';
        let jsConfetti = new JSConfetti()
        jsConfetti.addConfetti()

    }

    NumberInput.value = '';
}