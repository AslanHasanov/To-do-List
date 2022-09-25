function Add(){
    var value=document.querySelector("#inp").value
    var div=document.createElement("div")
    div.setAttribute("class","mt-3 box bg-warning p-2 d-flex justify-content-between align-items-center")
    var h2=document.createElement("h2")
    var icon=document.createElement("i")
    icon.setAttribute("class","remove fa-solid fa-trash ")
    h2.innerHTML=value
    div.appendChild(h2)
    div.appendChild(icon)
    document.querySelector(".first").appendChild(div)
    var remover=document.querySelectorAll(".remove")
    

   
    for(var i=0;i<=remover.length;i++){
        remover[i].onclick=function(){
           this.parentElement.remove()
        }
    }
}