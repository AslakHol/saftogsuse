/*
FILE NAME: slideshow.js
WRITTEN BY: Aslak Hollund
WHEN: November 2016
PURPOSE: This is a slideshow that displays pictures taken by saft og suse.

Under the section "Config for fading" values can be changed to alter the details of how slides are faded.
*/

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const imgElement = document.createElement("img")
const imgPaths = ["img/slides/slide_1.JPG", "img/slides/slide_2.JPG", "img/slides/slide_3.JPG", "img/slides/slide_4.JPG"]

// Config for fading
const fadeTimeStep = 1
const fadeOpacityStep = 0.01
const timeBetweenImage = 5000
ctx.fillStyle = "white"

var fadeOutIntervalID = 0 //Turns out let is not supported in safari < v. 10, so thats why I use var
var fadeInIntervalID = 0
var opacity = 1.0
var firstImage = true
var slideIndex = 0

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
