function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // if (html.classList.contains("light")) {
  // html.classList.remove("light")
  // } else {
  // html.classList.add("light")
  //}

  //pegar a tag imagem
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./asset/avatar-light.png")
  } else {
    img.setAttribute("src", "./asset/abrabusiness.png")
  }
}
