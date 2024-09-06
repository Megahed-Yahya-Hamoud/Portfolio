const menu=document.querySelector(".icon-menu")
const link=document.querySelector("#style-links")

menu.onclick= ()=>{
    menu.classList.toggle("fa-x")
    link.classList.toggle("active")
}