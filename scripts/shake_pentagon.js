
/*
FILE NAME: shake_pentagon.js
WRITTEN BY: Zawadi Berg Svela 
WHEN: November 2016
Purpose: This script makes the logo on the landing page shake on mouseover. 
It is meant as a funny easter egg in addition to the mandatory javascripts.
*/

// Config for shaking
const number_of_shakes = 40
//Amplitude in pixels
const shake_amplitude= 1
const milliseconds_between_shakes = 0.5

const pentagon = document.getElementById('logo').firstElementChild
pentagon.addEventListener('mouseover',(e) => {
	shake(pentagon)
})
function shake(pentagon){
	let count = 0
	let shake = setInterval(() => {
		let up
		//Stops the shaking after number_of_shakes times and resets the position
		if(count == number_of_shakes){
			clearInterval(shake)
			pentagon.style.left = '50%'
			pentagon.style.top = '50%'
		} else {
			count++
			let upSign = Math.round(Math.random()*2)-1
			let leftSign = Math.round(Math.random()*2)-1
			//Replaces the logo shakes_amplitude pixels away from it's original position
			pentagon.style.left = 50 + leftSign*shake_amplitude + '%'
			pentagon.style.top = 50 + upSign*shake_amplitude + '%'
		}
	},milliseconds_between_shakes)
}