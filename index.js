function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function randomDate() {
  let today = new Date()
  let date = new Date(randomIntFromInterval(today.getFullYear(),today.getFullYear()+20),randomIntFromInterval(today.getMonth(),11),randomIntFromInterval(today.getDay,30));
  return date;
}

let p = document.createElement("p")
let randDate = randomDate()
let today = date()
p.innerText = randDate.getFullYear() + "/" + (randDate.getMonth() +1 ) + "/" + (randDate.getDay() + 1)
document.querySelector("#appendafter").appendChild(p)
