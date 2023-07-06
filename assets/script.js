const menuBurguer=document.getElementsByTagName("button")[0]
const ulLinksNav=document.querySelector("nav ul")
const linksNav=document.querySelectorAll("nav ul a") 
const barraPrimeiraBotao=document.querySelector("button .barra1")
const barraCentralBotao=document.querySelector("button .barra2")
const barraTerceiraBotao=document.querySelector("button .barra3")


menuBurguer.addEventListener('click', ()=>{
    ulLinksNav.classList.toggle("mostrar")
    barraCentralBotao.classList.toggle("esconde-divCentral-botao")
    barraPrimeiraBotao.classList.toggle("inclina-primeiraDiv-botao")
    barraTerceiraBotao.classList.toggle("inclina-terceiraDiv-botao")
    
})

linksNav.forEach((link)=>{
    link.addEventListener('click',()=>{
        ulLinksNav.classList.toggle("mostrar")

        barraCentralBotao.classList.toggle("esconde-divCentral-botao")
        barraPrimeiraBotao.classList.toggle("inclina-primeiraDiv-botao")
        barraTerceiraBotao.classList.toggle("inclina-terceiraDiv-botao")
    })
})