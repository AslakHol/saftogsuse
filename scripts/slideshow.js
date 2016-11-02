const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const imgElement = document.createElement("img")
const imgPaths = ["img/slides/slide_1.JPG", "img/slides/slide_2.JPG", "img/slides/slide_3.JPG", "img/slides/slide_4.JPG"]

let slideIndex = 0


if (imgElement){
  imgElement.setAttribute('src', imgPaths[slideIndex])
  imgElement.setAttribute("onload", "insertImage()")
  setInterval(switchImage, 3000)
}

function insertImage(){
  ctx.drawImage(imgElement, 0, 0, 700, 525)
}

function switchImage(){
  slideIndex ++
  if (slideIndex >= imgPaths.length){
    slideIndex = 0
  }
  imgElement.setAttribute('src', imgPaths[slideIndex])
}
