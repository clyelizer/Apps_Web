
let movable=false
const boule=document.getElementById("boule")
window.addEventListener("click",(event)=>{
    if(movable){
        boule.style.left=(event.clientX-boule.offsetWidth/2)+"px"
        boule.style.top=(event.clientY-boule.offsetHeight/2)+'px'
    }
})
boule.addEventListener("mousedown",()=>movable=!movable)

function cacher(event){        
    if(event.offsetLeft>1585 &&event.offsetTop>440)
event.style.visibility='hidden'
}
window.addEventListener("keydown",(event)=>{
    switch(event.key){
        case "ArrowDown":
            boule.style.top=(boule.offsetTop+15)+'px';
                cacher(boule)
            break 
        case "ArrowUp":
            boule.style.top=(boule.offsetTop-15)+'px';
            cacher(boule)

            break
        case "ArrowLeft":
                boule.style.left=(boule.offsetLeft-15)+'px';
                cacher(boule)

                break 
        case "ArrowRight":
                boule.style.left=(boule.offsetLeft+25)+'px';
                cacher(boule)

                break
    }




})

let pressedKey={}
window.addEventListener("keydown",(e)=>{
    pressedKey[e.key]=true
    if(pressedKey["ArrowDown"]&&pressedKey["ArrowRight"]){
        boule.style.left=(boule.offsetLeft+5)+"px"
        boule.style.top=(boule.offsetTop+5)+"px"
    }
    if(pressedKey["ArrowDown"]&&pressedKey["ArrowLeft"]){
        boule.style.top=(boule.offsetTop+5)+"px"
        boule.style.left=(boule.offsetLeft-5)+"px"

    }
   
    if(pressedKey["ArrowUp"]&&pressedKey["ArrowLeft"]){
        boule.style.left=(boule.offsetLeft-5)+"px"
        boule.style.top=(boule.offsetTop-5)+"px"
    }
    if(pressedKey["ArrowUp"]&&pressedKey["ArrowRight"]){
        boule.style.left=(boule.offsetLeft+5)+"px"
        boule.style.top=(boule.offsetTop-5)+"px"
    }
   
        
})

window.addEventListener("keyup",(e)=>{
    pressedKey[e.key]=false
})

