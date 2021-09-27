function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function ranDate() {
  let today = new Date()
  return new Date(randomIntFromInterval(today.getFullYear(), today.getFullYear() + 1), Math.min(randomIntFromInterval(today.getMonth() + 1, 11), 11), randomIntFromInterval(0,29), 0, 0, 0, 0);
}

let p = document.createElement("p")
let randDate = ranDate()
p.innerText = randDate.getFullYear() + "/" + (randDate.getMonth() +1 ) + "/" + (randDate.getDate() + 1)
document.querySelector("#appendafter").appendChild(p)
