let background = document.getElementsByTagName("BODY")[0];
let toggle = document.getElementById('toggle');
let social = document.getElementsByClassName("social")

toggle.addEventListener('click',function(){

    if(toggle.checked === false){
        background.style.backgroundColor ='#20222F'
       for(var i = 0; i<social.length;i++){
           social[i].style.backgroundColor ='#252B42'
       }
    } else{
        background.style.backgroundColor ='#fff'
        for(var i = 0; i<social.length;i++){
            social[i].style.backgroundColor ='hsl(227, 47%, 96%);'
        }
    }
})