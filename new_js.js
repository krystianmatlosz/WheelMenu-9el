//document.body.addEventListener('contextmenu', e => e.preventDefault() & e.stopPropagation());
// document.body.addEventListener('mousedown', onMouseDown);
// document.body.addEventListener('touchstart', e => onMouseDown(e.touches[0]));
// document.body.addEventListener('mouseup', onMouseUp);
// document.body.addEventListener('touchend', e => onMouseUp(e.touches[0]));
document.body.addEventListener('mousemove', onMouseMove);
// document.body.addEventListener('touchmove', e => onMouseMove(e.touches[0]));

let showing, min = 125;
let anchorX = window.innerWidth/2;
let anchorY = window.innerHeight/2-(50);
const wheel = document.querySelector('.wheel');

window.onload = function() {
	wheel.style.setProperty('--x', `${anchorX}px`);
	wheel.style.setProperty('--y', `${anchorY}px`);
}

function onMouseMove({ clientX: x, clientY: y }) {
	let dx = x - anchorX;
	let dy = y - anchorY;
	console.log(dx);
	let mag = Math.sqrt(dx * dx + dy * dy);
	let index = 0;

	if (mag >= min && mag <= 285) {
		let deg = Math.atan2(dy, dx) + 0.625 * Math.PI;
		while (deg < 0) deg += Math.PI * 2;
		index = Math.floor(deg / Math.PI * 4) + 1;
	}

	wheel.setAttribute('data-chosen', index);
}

// function onMouseDown({ clientX: x, clientY: y }) {
// 	showing = true;
// 	anchorX = x;
// 	anchorY = y;

// 	wheel.style.setProperty('--x', `${x}px`);
// 	wheel.style.setProperty('--y', `${y}px`);
// 	wheel.classList.add('on');
// }

// function onMouseUp() {
// 	showing = false;
// 	wheel.setAttribute('data-chosen', 0);
// 	wheel.classList.remove('on');
// }