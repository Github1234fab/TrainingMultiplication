let table = document.querySelector("#number");
let multiplication = document.querySelector("#multiplication");
let reponse = document.querySelector("#reponse");

table.addEventListener("mouseleave", () => {
  let numberHidden = "?";

  for (let i = 0; i < 5; i++) {
    let numberRandom = Math.floor(Math.random() * 11);
    console.log(numberRandom);
    let operation = numberRandom * table.value;
    console.log(operation);
    let div = document.createElement("div");
    div.innerHTML = `${table.value} x <span class="number_random">${numberHidden}</span> = ${operation}`;
    multiplication.appendChild(div);
    div.addEventListener("click", () => {
      div.innerHTML = `${table.value} X <span class="number_random">${numberRandom}</span> = ${operation}`;
    });
  }
});
