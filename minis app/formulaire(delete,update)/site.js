window.addEventListener('load',(ev)=>{
    const avert=document.querySelector(".avertissement")

    document.getElementById("ajouter").addEventListener("click",(event)=>{
        event.preventDefault
        const fname=document.getElementById("fname")
        const lname=document.getElementById("lname")
        const age=document.getElementById("age")
        const pass=document.getElementById("pass")
        const champs=Array(fname,lname,age,pass)

        if((pass.value&&pass.value.length >8)&&fname.value&&lname.value&&(age.value&&age.value>0)){ //succes
            avert.classList.add("succes")
            avert.classList.remove("echec")
            avert.innerText="Tout est Ok"
            const entete_cell=document.createElement("tr") //create the row, then create cells finally add all cells to row

            champs.forEach(element => {
                const cellule=document.createElement("td");
                cellule.innerText=element.value
                entete_cell.appendChild(cellule)
                element.value=""
            });
            let e=document.createElement("td")
            e.innerHTML=`<img src='delete.png'/>`
            entete_cell.appendChild(e)
            
            e=document.createElement("td")
            e.innerHTML=`<img src='update.png'/>`
            entete_cell.appendChild(e)

            document.getElementById("entete_tab").appendChild(entete_cell)

        }
        else{ //echec
            avert.classList.remove("succes")
            avert.classList.add("echec")
            pass.value=""
            avert.textContent="Vos infos ne semblent pas correctes"
        }
        document.querySelector("table").addEventListener('click',(event)=>{
            if(event.target.matches("img[src='delete.png']")){
                event.target.parentElement.remove()
            }else if(event.target.matches("img[src='update.png']")){
                for(let i=0; i<champs.length;i++){
                    console.log(champs[3])
                    cells=(event.target.closest('tr')).cells
                    
                    champs[i].value=cells[i].textContent
                    (event.target.closest('tr')).remove
                }
            }
        })
    



    })

    
    const btn_show=document.getElementById("afficher_cacher").addEventListener("click",(event)=>{
        event.preventDefault
        if(event.target.innerText=="Afficher"){
            event.target.textContent="Cacher"
            document.getElementById("pass").type='texte'
        }else{
            event.target.innerText="Afficher"
            document.getElementById("pass").type='password'
        }})






})