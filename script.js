let btn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");

let timer;
function handleTime(minutes , times){
	// console.log("in minut fxn : ",minutes)
	minutes--;
	times[1].value = minutes
	return minutes;
}

function startTimer(evnt) {
	evnt.preventDefault();
	stopBtn.hidden = false;
	let timeInputs = document.querySelectorAll(".time-input");
	let hrs = timeInputs[0].value;
	let min = timeInputs[1].value;
	let sec = timeInputs[2].value;

	if(!timer){
	  timer = setInterval(() => {
			timeInputs[2].value = sec;
			sec--;
		if(sec === -1 && min != 0){
			sec = 59;
			let remaining_min	=	handleTime(min , timeInputs);
			min = remaining_min;
		}else if(min === 0 && hrs != 0){
			hrs--;
			timeInputs[0].value = hrs
			min = 59;
			timeInputs[1].value = min
		}
		}, 1000);
}}

function stopTimer(event){
		event.preventDefault();
		clearInterval(timer);
		timer = null;
}

btn.addEventListener("click" , startTimer);
stopBtn.addEventListener("click", stopTimer);
