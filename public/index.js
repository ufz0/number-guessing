const sendBtn = document.getElementById('sendBtn');
const status = document.getElementById('status');


let number = Math.floor(Math.random() * 11);
let tries = 1;
console.log('Debug: generated Number:', number)

sendBtn.onclick = () => {
    const num = document.getElementById("num").value;
    console.log('Debug: entered Number:',num)
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
function enableReset(){
    document.getElementById('rsBtn').hidden=false;
    rsBtn.onclick = () => {
        tries = 1
        status.innerText='';
        document.getElementById("num").value = ''
        document.getElementById("num").disabled = false;
        number = Math.floor(Math.random() * 11);
    }
}