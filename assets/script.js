const menuBurguer=document.getElementsByTagName("button")[0]
const ulLinksNav=document.querySelector("nav ul")
const linksNav=document.querySelectorAll("nav ul a") 
const barraPrimeiraBotao=document.querySelector("button .barra1")
const barraCentralBotao=document.querySelector("button .barra2")
const barraTerceiraBotao=document.querySelector("button .barra3")
const imgTextSobre = document.getElementsByClassName("sobre-conteudo")[0]

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
/*Checa se sessão Sobre está aparecendo na tela ao dar scroll, se sim adiciona animação*/
function animaImgTextSobre(){
    const posicao = imgTextSobre.getBoundingClientRect()//retorna coordenadas do elemento
    const topo = posicao.top//pega a posição topo do elemento
    const base = posicao.bottom-200//pega a posição final do elemento e subtrai 200px
    
    if((topo >= 0) && (base <= window.innerHeight)){//window.innerHeight retorna altura em px da janela
        imgTextSobre.classList.add("anima-opacidade")
    }
}
document.addEventListener('scroll',animaImgTextSobre)