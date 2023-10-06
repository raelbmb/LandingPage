function toggleMode(){
    const html = window.document.documentElement

html.classList.toggle("light")

const img = document.querySelector("#profile img")

if(html.classList.contains("light")){
    img.setAttribute("src", "assets/avatar2.jpeg")
} else {
    img.setAttribute("src", "assets/avatar_perfil.jpg")
}


}