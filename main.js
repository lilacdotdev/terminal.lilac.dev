
const terminal_in = document.getElementById('cmd-typing');
const typing = document.getElementById('typing').innerHTML;

let prompt = "";

terminal_in.addEventListener('keydown', (event) => {
    if(event.key === 'Backspace') {
        alert("back");
    } else if (event.key === 'Enter') {
      alert("enter");
    } else if (event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode >= 97 && event.keyCode <= 122){
        alert("key");
    }
  });

function command(cmd) {
    switch(cmd.toLowerCase()) {
        case 'whois':
            whois;
            break;

        case 'projects':
            projects;
            break;

        case 'objective':
            objective;
            break; 
            
        case 'contact':
            contact;
            break; 
        
        case 'test':
            test;
            break; 
    }
}