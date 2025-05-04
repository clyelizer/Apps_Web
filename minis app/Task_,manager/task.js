  
document.getElementById("add").addEventListener("click",(e)=>{
  const champ_saisie=document.getElementById("text")
  e.preventDefault()
  const val=champ_saisie.value.trim()

  if(val!=""){
  const btn=document.createElement("button")
  btn.className="button1"
  btn.innerText='Modifier'

  const btn1=document.createElement("button")
  btn1.className="button2"
  btn1.innerText='Supprimer'

  const li=document.createElement("li")
  const input=document.createElement("input")
  const label=document.createElement("label")

  input.type='checkbox'

  label.textContent=`${val}`

  li.appendChild(input)
  li.appendChild(label)
  li.appendChild(btn)
  li.appendChild(btn1)
  
  document.querySelector('ul').appendChild(li)
  champ_saisie.value=""
  champ_saisie.focus()
  }
  document.querySelector(".button2").addEventListener("click",(e)=>{
    console.log(e.target)
  })


  document.querySelector('ul').addEventListener("change",(e)=>{
    e.target.nextElementSibling.classList.toggle('finished')
  })

})

  document.querySelector("ul").addEventListener("click",(e)=>{
    if(e.target.matches(".button1")){
      document.getElementById("text").value=e.target.previousElementSibling.textContent
      e.target.previousElementSibling.classList.add("finished")
    }
    else if(e.target.matches(".button2")){
      
    }
  })













