let message = document.querySelector('h4');
let addbtn = document.querySelector('#add');
let count = 0;
addbtn.addEventListener('click',function(){
   
    if (count==0){
        message.innerHTML='Friends'
        message.style.color='green'
        addbtn.style.color='green'
        addbtn.innerHTML='Add Friend'
        addbtn.style.backgroundColor = '#c2fbd7';
        count=1
    }
    else{
        message.innerHTML='Stranger'
        message.style.color='red'
        addbtn.innerHTML='Remove Friend'
        addbtn.style.color='#fff'
        addbtn.style.backgroundColor='#A9A9A9' 
        count=0
    }
    
})



