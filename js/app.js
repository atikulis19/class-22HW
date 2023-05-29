let passEyebtn = document.querySelector('.passinput button')

function passwordShowHide(){
   let inputFiled =  document.querySelector('.password');

   if(inputFiled.type == 'password'){
        inputFiled.type = 'text'
        passEyebtn.innerHTML = `<i class="bi bi-eye"></i>`
   }else{
        inputFiled.type = 'password'
        passEyebtn.innerHTML = `<i class="bi bi-eye-slash"></i>`
   }
}

passEyebtn.addEventListener("click",passwordShowHide)




setInterval(function(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);


document.querySelector('.loginbtn button').style.backgroundColor = `rgb(${red},${green},${blue})`;

},1000)