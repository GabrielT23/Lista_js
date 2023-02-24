let input = document.querySelector('.container > input');
input.addEventListener('keydown', (e) =>{
    if(e.key == 'Enter'){
        let email = input.value;
        let regexp = new RegExp(/(@gmail.com|@hotmail.com|@yahoo.com)$/i);
        let n = regexp.test(email);
        if(n == true){
            alert("E-mail aceito!");
        }
        else if(n == false){
            alert("E-mail inválido!");
        }
    }
});