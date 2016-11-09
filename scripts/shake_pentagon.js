
/*Created by Zawadi Berg Svela, november 2016
This script makes the logo on the index.html site shake on mouseover.
It is meant as an easter egg in addition to the mandatory javascripts.
*/

const pentagon = document.getElementById('logo').firstElementChild
pentagon.addEventListener('mouseover',e=>{
	shake(pentagon)
})
function shake(pentagon){
	let count = 0
	let shake = setInterval(()=>{
		let up
		if(count == 40){
			clearInterval(shake)
			pentagon.style.left = '50%'
			pentagon.style.top = '50%'
		} else {
			count++
			let upSign = Math.round(Math.random()*2)-1
			let leftSign = Math.round(Math.random()*2)-1
			pentagon.style.left = 50 + leftSign*1 + '%'
			pentagon.style.top = 50 + upSign*1 + '%'
		}
	},0.5)
}