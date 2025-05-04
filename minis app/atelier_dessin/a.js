const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let brushColor = 'black';
let brushSize = 5;

let lastX = 0;
let lastY = 0;
let isDrawing = false;
let writable=0

window.addEventListener('beforeunload',(e)=>e.preventDefault())

setInterval(()=>{
  document.getElementById("avert").style.display='none'
},10000)

setInterval(()=>{
  document.getElementById("avert").style.display='block'
},10000)

document.querySelector(".bts_contenaire").addEventListener('click',(ev)=>{
    if(ev.target.matches("#Mode_Zen")){
        ev.currentTarget.querySelectorAll("button").forEach(element => {
            if(element.id!="Mode_Zen")
            element.classList.toggle("disabled")
        })
            document.querySelector(".palette").classList.add('disabled')

    } 
    else if(ev.target.matches("#Dark-Clair")){
        if(document.body.style.backgroundColor=="white"){
            dark=true
            document.body.style.backgroundColor="rgba(12, 16, 22, 0.85)"
        }
        else{
            document.body.style.backgroundColor="white";

        }
        document.querySelector(".main_contenaire").style.backgroundColor='white'


    }
    else if(ev.target.matches("#Couleurs")){
        document.querySelector(".palette").classList.toggle('disabled')
    }
  
})

// Adapter le canvas aux dimensions réelles (pixels)
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

 
function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('load', resizeCanvas);


canvas.addEventListener('mousedown', (e) => {
    //isDrawing = true;
    writable=!writable;
    [lastX, lastY] = [e.offsetX, e.offsetY]; // Départ du trait
});


canvas.addEventListener('click', (e) => {
  writable=!writable;
  [lastX, lastY] = [e.offsetX, e.offsetY]; // Départ du trait

})

canvas.addEventListener('mouseup', () => {writable=!writable});      


canvas.addEventListener('mousemove', (e) => {
   // if (!(writable||isDrawing)) return;
    if(writable){
      const currentX = e.offsetX;
      const currentY = e.offsetY;

      // Début du tracé
      ctx.beginPath();
      ctx.moveTo(lastX, lastY); // Point de départ
      ctx.lineTo(currentX, currentY); // Point d'arrivée

      ctx.strokeStyle = brushColor;
      ctx.lineWidth = brushSize;
      ctx.lineCap = 'round';
      ctx.stroke();


      // Mise à jour pour le prochain mouvement
      [lastX, lastY] = [currentX, currentY];
    }
});

  

document.getElementById('Pinceau').addEventListener('click', (e) => {
  brushColor = "black";
});

document.querySelectorAll('.palette div').forEach(div => {
  div.addEventListener('click', () => {
    brushColor = div.style.backgroundColor;
  });
});

document.getElementById('Gomme').addEventListener('click', () => {
  brushColor = 'white';
  brushSize = 7;

});

document.getElementById('Reset').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
document.querySelectorAll('.p').forEach(e => {
  e.addEventListener('click', (ev) => {
    document.querySelectorAll('.p').forEach(el => el.classList.remove('checked_p'));
    ev.target.classList.add('checked_p');
  });
});



