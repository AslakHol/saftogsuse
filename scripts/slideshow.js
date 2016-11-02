const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const imgElement = document.createElement("img")
const imgPaths = ["img/slides/slide_1.JPG", "img/slides/slide_2.JPG", "img/slides/slide_3.JPG", "img/slides/slide_4.JPG"]

// Config for fading
const fadeTimeStep = 5
const fadeOpacityStep = 0.01
const timeBetweenImage = 5000
ctx.fillStyle = "white"

let fadeOutIntervalID = 0
let fadeInIntervalID = 0
let opacity = 1.0
let firstImage = true
let slideIndex = 0

if (imgElement){ // Setup
  imgElement.setAttribute('src', imgPaths[slideIndex])
  imgElement.setAttribute("onload", "nextStep()")
  setInterval(nextStep, timeBetweenImage)
}

function nextStep(){
  if (firstImage){ // handles inserting the first image
    ctx.drawImage(imgElement, 0, 0, 700, 525)
    firstImage = false
  }

  else if (opacity === 1.0){
    fadeOutIntervalID = setInterval(fadeOut, fadeTimeStep)
  }
}

function switchImage(){
  slideIndex ++
  if (slideIndex >= imgPaths.length){
    slideIndex = 0
  }
  imgElement.setAttribute('src', imgPaths[slideIndex])
  fadeInIntervalID = setInterval(fadeIn, fadeTimeStep)
}

function fadeStep(opacity){
  ctx.globalAlpha = 1
  ctx.rect(0,0,700,525)
  ctx.fill()
  ctx.globalAlpha = opacity
  ctx.drawImage(imgElement, 0, 0, 700, 525)
}

function fadeOut(){
  opacity -= fadeOpacityStep
  if (opacity < 0.1){ // catches any floating point errors.
    opacity = 0.0
  }
  fadeStep(opacity)
  if (opacity === 0.0){
    clearInterval(fadeOutIntervalID)
    switchImage()
  }
}

function fadeIn(){
  opacity += fadeOpacityStep
  if (opacity > 0.9){
    opacity = 1.0
  }
  fadeStep(opacity)
  if (opacity === 1.0){
    clearInterval(fadeInIntervalID)
  }
}
