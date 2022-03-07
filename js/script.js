$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    responsive:{
        0:{
            item:1
        },
        600:{
            item:3
        },
        1000:{
            item:5
        }
    }
})

var video = document.getElementById("memeess")
const icone = document.getElementById("desability")


const link = document.querySelector("video")
function active(){
   video.classList.add("active")
   link.pause()

}

function Ace_Attorney(){
    video.classList.remove("active")
    link.setAttribute("src","image/Memes/Ace Attorney/Ace Attorney - Papel Higiênico Preto DUBLADO_720P HD.mp4") 
}
function Batman(){
    video.classList.remove("active")
    link.setAttribute("src","image/Memes/Batman 1/Meu Vídeo.mp4")

}

function Ben_10(){
    video.classList.remove("active")
    link.setAttribute("src","image/Memes/ben 10/y2meta.com - Raça Absoluta, Além Da Consciência, Esse é o Poder Que Beira a Onipotência(360p) (online-video-cutter.com).mp4")

}
function Hotel_transilvânia(){
    video.classList.remove("active")
    link.setAttribute("src","image/Memes/Hotel Transylvânia/y2meta.com - coca cola espuma (versão Transilvânia trap)(360p).mp4")
    
}
function jojo(){
    video.classList.remove("active")
    link.setAttribute("src","image/Memes/jojo/HOJE EU VOU PRA FARRA EDIT JOJO TORTURE DANCE🎵_360P.mp4")
    
}
function Monstros_sa(){
    video.classList.remove("active")
    link.setAttribute("src","image/Memes/Monstros Sa/Mike Wazowski 100 PUTO_360P.mp4")
    
}
function Ratatoulle(){
    video.classList.remove("active")
    link.setAttribute("src","image/Memes/Ratatoulle/y2meta.com - MEME RATATOUILLE (Original) _ Fabricio Memes(360p).mp4")  
}

function Superman(){
    video.classList.remove("active")
    link.setAttribute("src","image/Memes/Sumer man/sai do mei.mp4")
    
}
function Velozes_Furiosos(){
    video.classList.remove("active")
    link.setAttribute("src","image/Memes/velozes e furiosos/y2meta.com - Tomas Turbando.mp4")
    
}
function Venon(){
    video.classList.remove("active")
    link.setAttribute("src","image/Memes/Venon/y2meta.com-VENOM VERSÃO CHAVES ��-(1080p) (online-video-cutter.com).mp4")
    
}

console.log(link)