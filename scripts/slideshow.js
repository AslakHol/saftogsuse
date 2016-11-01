const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const currentSlide = document.createElement("img")
const imgPaths = ["img/slides/slide_1.JPG", "img/slides/slide_2.JPG", "img/slides/slide_3.JPG", "img/slides/slide_4.JPG"]
// const imgtest = document.getElementById("imgtest")


if (currentSlide){
  currentSlide.setAttribute('src', imgPaths[0])
  currentSlide.setAttribute("onload", "insertImage()")
  console.log(currentSlide + "setting up currentSlide")
  console.log(currentSlide)
}

function insertImage(){
  console.log("inserting image")
  ctx.drawImage(currentSlide, 10, 10)
}

if (ctx){
  // imgtest.setAttribute('src', imgPaths[0])

  /*
  ctx.beginPath()
  ctx.strokeStyle = "black"
  ctx.arc(250, 250, 100, 0, 2 * Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(210,215,5,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(290, 215, 5, 0, 2 * Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(250, 260, 40, 0, Math.PI, false)
  ctx.stroke()
  */
}
