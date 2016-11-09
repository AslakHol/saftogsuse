
/*
FILE NAME: shake_pentagon.js
WRITTEN BY: Zawadi Berg Svela 
WHEN: November 2016
Purpose: This script makes the logo on the landing page shake on mouseover. 
It is meant as a funny easter egg in addition to the mandatory javascripts.
*/

// Config for shaking
const number_of_shakes = 40
const shake_amplitude_in_pixels = 1
const milliseconds_between_shakes = 0.5

const pentagon = document.getElementById('logo').firstElementChild
pentagon.addEventListener('mouseover',(e) => {
	shake(pentagon)
})
function shake(pentagon){
	let count = 0
	let shake = setInterval(() => {
		let up
		if(count == number_of_shakes){
			clearInterval(shake)
			pentagon.style.left = '50%'
			pentagon.style.top = '50%'
		} else {
			count++
			let upSign = Math.round(Math.random()*2)-1
			let leftSign = Math.round(Math.random()*2)-1
			pentagon.style.left = 50 + leftSign*shake_amplitude_in_pixels + '%'
			pentagon.style.top = 50 + upSign*shake_amplitude_in_pixels + '%'
		}
	},milliseconds_between_shakes)
}