let background = document.getElementsByTagName("BODY")[0];
let toggle = document.getElementById('toggle');
let social = document.getElementsByClassName("social")
let white = document.getElementsByClassName('white')
 let cat = document.getElementsByClassName('switch-grey')
let styleElem = document.head.appendChild(document.createElement('style'))

toggle.addEventListener('click',function(){

    if(toggle.checked === false){
        background.style.backgroundColor ='#20222F'
       for(var i = 0; i<social.length;i++){
           social[i].style.backgroundColor ='#252B42'
       }
       for(var i =0; i<white.length;i++){
           white[i].style.color ='#fff'
       }

       for(var i =0; i<cat.length;i++){
           cat[i].style.color ='#8C98C6'
       }
 styleElem.innerHTML = '.social::hover{background-color:#8C98C6;}'
      


    } else{
        background.style.backgroundColor ='#fff'
        for(var i = 0; i<social.length;i++){
            social[i].style.backgroundColor ='hsl(227, 47%, 96%)'
        }

        for(var i = 0; i<white.length;i++){
            white[i].style.color ='initial'
        }

        for(var i=0;i<cat.length;i++){
            cat[i].style.color ='#63687D'
        }

        styleElem.innerHTML = '.social::hover{background-color:#63687d38}'


    }
})


