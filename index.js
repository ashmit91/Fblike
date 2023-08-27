var istatus=document.querySelector("h3")  
var add=document.querySelector("#add")
var removes=document.querySelector("#remove")

add.addEventListener("click",function()
{
istatus.innerHTML="Friend"
istatus.style.color="green"

} 

)
removes.addEventListener("click",function()
{
    istatus.innerHTML="Stranger"
    istatus.style.color="red"
})