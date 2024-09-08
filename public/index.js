const sendBtn = document.getElementById('sendBtn');
const status = document.getElementById('status');

const numbersList = document.getElementById('numbersList');
const triedNumbersText = document.getElementById('triedNumbersText')

let number = Math.floor(Math.random() * 11);
let triedNumbers = [];
let tries = 1;
console.log('Debug: generated Number:', number)



document.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("sendBtn").click();
  }
});

sendBtn.onclick = () => {
    const num = document.getElementById("num").value;
    if(num.length === 0){
      console.log('Input is empty')
    }else{
    console.log('Debug: entered Number:',num)
    }

    if(num > 10 || num < 0){
      if (num < 0) {
        status.innerText = 'Your guess must be greater or equal to 0'
      }else if(num > 10){
        status.innerText = 'Your guess must be smaller or equal to 10'
      }
    }else{
      if(document.getElementById("num").value.length === 0){
        status.innerText = 'You have to enter something'
      }else{
        document.getElementById("num").value = '';
      if(triedNumbers.includes(num)){
        status.innerText='You already tried that number, the counter did not go up'
      }else{
        triedNumbersText.hidden = false;
        triedNumbers.push(num)
        numbersList.innerText = triedNumbers.sort()
        if(num == number){
            if(tries === 1){
                status.innerText='You got it right, you needed ' + tries + ' try'
            }else{
                status.innerText='You got it right, you needed ' + tries + ' tries'
            }
            document.getElementById("num").disabled = true;
            enableReset()
        }else{

            if(num > number){
                status.innerText='The searched number is smaller then your entered number'
            }else{
                status.innerText='The searched number is greater than your entered number'
            }
            tries++;
        }
      }
      }
    }

}
function enableReset(){
  document.getElementById('sendBtn').hidden = true;
    document.getElementById('rsBtn').hidden=false;
    setTimeout(500)
    document.addEventListener("keypress", function(event) {
      if (event.key === "r") {
        event.preventDefault();
        document.getElementById("rsBtn").click();
      }
    });
    rsBtn.onclick = () => {
      sendBtn.hidden = false;
        tries = 1
        triedNumbers = [];
        status.innerText='';
      numbersList.innerText = '';
      triedNumbersText.hidden = true;
        console.clear()
        rsBtn.hidden = true;
        document.getElementById("num").value = ''
        document.getElementById("num").disabled = false;
        number = Math.floor(Math.random() * 11);
        console.log('Debug: generated Number:', number)
    }
}
