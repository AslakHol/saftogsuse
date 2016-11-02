const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const imgElement = document.createElement("img")
const imgPaths = ["img/slides/slide_1.JPG", "img/slides/slide_2.JPG", "img/slides/slide_3.JPG", "img/slides/slide_4.JPG"]

let opacity = 1.0
let firstImage = true
let slideIndex = 0

if (imgElement){
  imgElement.setAttribute('src', imgPaths[slideIndex])
  imgElement.setAttribute("onload", "nextStep()")
  setInterval(nextStep, 5000)
}

function nextStep(){
  if (firstImage){ // handles inserting the first image
    ctx.drawImage(imgElement, 0, 0, 700, 525)
    firstImage = false
  }

  else if (opacity === 1.0){
    fadeOut()
  }

  else{
    console.log("The script now wants to call switchImage")
    // switchImage()
  }
}

function switchImage(){
  slideIndex ++
  if (slideIndex >= imgPaths.length){
    slideIndex = 0
  }
  imgElement.setAttribute('src', imgPaths[slideIndex])
  fadeIn()
}

function fadeOut(){

  opacity -= 0.1
  ctx.rect(0,0,700,525)
  ctx.fillStyle = "white"
  ctx.fill()
  ctx.globalAlpha = opacity
  ctx.drawImage(imgElement, 0, 0, 700, 525)

  console.log("fading to opacity: "+ opacity)
}

function fadeIn(){
  console.log("we're fading in")
}
