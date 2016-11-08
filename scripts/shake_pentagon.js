

let nav_elements = document.getElementsByClassName('nav_element')
console.log(nav_elements)
let nav_elements_array = [].slice.call(nav_elements);
nav_elements_array.forEach(nav_element => {
	nav_element.style.color = "hotpink"
	nav_element.addEventListener('mouseover', event => {
		let pentagon = document.getElementById('logo').firstElementChild
		let pentagon_left = '50%'
		let pentagon_top = '50%'
		console.log(pentagon_left)
		let count = 0
		let shake = setInterval(function(){
			if(count == 20){
				clearInterval(shake)
			} else {
				count++
				let d = new Date()
				pentagon.style.left = Number(pentagon_left.slice(0,-1)) + d.getTime()%10 - 5 +'%'
				pentagon.style.top = Number(pentagon_top.slice(0,-1)) + d.getTime()%10 - 5 +'%'
				pentagon_left = pentagon.style.left
			}
		},3)
		pentagon.style.left = '50%'
		pentagon.style.top = '50%'
	})
})
