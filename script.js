// let resume = document.getElementById('resume-btn');
let btn = document.getElementById("start-btn");

btn.addEventListener("click" , (evnt)=>{
  evnt.preventDefault();
  let timeInputs = document.querySelectorAll(".time-input");
  let hrs = timeInputs[0].value;
  let min = timeInputs[1].value;
  let sec = timeInputs[2].value;
  // timeInputs.forEach((time , index) => {
  //   console.log(`Input Index${index}:`, time.value)
  // })
  console.log(`Hrs: ${hrs} ,Min: ${min} ,Sec: ${sec}`);
})
