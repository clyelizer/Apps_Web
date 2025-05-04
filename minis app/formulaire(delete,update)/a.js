document.body.addEventListener('click',(event)=>{
    if(event.target.matches('#ajouter')){
        event.preventDefault
        const avert=document.querySelector('.avertissement')
        const fname=document.getElementById("fname")
        const lname=document.getElementById("lname")
        const age=document.getElementById("age")
        const pass=document.getElementById("pass")
        const champs=Array(fname,lname,age,pass)

        if(((parseInt(age.value)&&age.value>0)&&(pass.value&&pass.value.length >8)&&fname.value&&lname.value)){ //succes
            avert.classList.add("succes")
            avert.classList.remove("echec")
            avert.innerText="Tout est Ok"
            setTimeout(()=>{avert.classList.remove("echec"); avert.classList.remove("succes")},3000)

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

            //gestion des btons d'action de la page
            document.querySelector(".delete").innerText="Delete"
            document.querySelector("#update").innerText="Update"
      

        }
        else{ //echec
            avert.classList.remove("succes")
            avert.classList.add("echec")
            pass.value=""
            avert.textContent="Vos infos ne semblent pas correctes"
        }
    }
    else if(event.target.matches("img[src='delete.png']")){
       event.target.parentElement.parentElement.remove()
    }else if(event.target.matches("img[src='update.png']")){
        const values=event.target.parentElement.parentElement.querySelectorAll("td")
        const form_inputs=document.querySelectorAll("input")
        for(let i=0;i<values.length-2;i++){
            form_inputs[i].value=values[i].innerText
        }
        event.target.parentElement.parentElement.remove()
    }
        

    else if(event.target.matches("#afficher_cacher")){
        if(event.target.innerText=="Afficher"){
            event.target.innerText="Cacher"
            document.getElementById("pass").type='texte'
        }else{
            event.target.innerText="Afficher"
            document.getElementById("pass").type='password'
        }
    }

})




