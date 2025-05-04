function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("button").addEventListener("click",(event)=>{
    let score=0;
    const difficulty=document.querySelector('input[name="difficulty"]:checked')
    const avert= document.getElementById("avertissement")
    const souris = document.getElementById("souris");

    if(!difficulty){
        avert.classList.add("avertissement")
        avert.innerHTML="Veuillez cocher un niveau de difficulte"
    }
    else{  //cacher l'avertisement 
        avert.classList.remove("avertissement")
        avert.classList.add("hidden")  
        document.getElementById("button").classList.add("hidden") //cacher  le btn start
       
        souris.classList.remove("hidden") //faire apparaitre la souris
        document.querySelector(".container_score").classList.toggle("hidden") //faire apparaitre le score
        
        //formater le body pour lui donner la surface ou cursor devient le marteau
        document.body.style.width="600px";
        document.body.style.height="500px";
      //  document.body.style.cursor = "url('marteau2.png'), auto"
        // definition de la duree dapparition
        switch(difficulty.value){
            case 'facile':
                duree=1000;
                break;
            case 'moderee':
                duree=800;
                break; 
            case 'difficile':
                duree=500;
                break;
        }
        
        interval_Id=setInterval(()=>{ //intervalle dapparition de la souris
            souris.style.top=(randInt(180,500))+'px'
            souris.style.left=(randInt(0,900))+'px'
        },duree)

            //ecouter le changement de difficulte
        document.querySelector(' fieldset').addEventListener("change",(ev)=>{
            //si changement de difficulte (event change):
                //1) delete a=ancien setinterval
        clearInterval(interval_Id)
        switch(ev.target.value){
            case 'facile':
                duree=1000;
                break;
            case 'moderee':
                duree=800;
                break; 
            case 'difficile':
                duree=500;
                break;
                
        }  //2) definir un new setinterval
        interval_Id=setInterval(()=>{
                souris.style.top=(randInt(180,500))+'px'
                souris.style.left=(randInt(0,900))+'px'
        },duree)
        })
        indication=setInterval(()=>{ //indication durant la partie
            document.getElementById("indication").classList.toggle("hidden")
        },10000)


        window.addEventListener("click",(event)=>{
        //definissons des intervalles de tolerance pour click sur la souris
            //si entre position de la souris+taille_image_souris/2
            if((event.clientX>souris.offsetLeft&&event.clientX<souris.offsetLeft+souris.offsetWidth)&&(event.clientY>souris.offsetTop&&event.clientY<souris.offsetTop+souris.offsetHeight)){
                //on incremente point dans linput de lelement de classe .container_score
                document.querySelector(".container_score input").value=score++ 
            }
       
        })
            
    }
    
})






