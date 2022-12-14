let counter = document.querySelector("#counter");
let increament = document.querySelector("#increament");
let decreament = document.querySelector("#decreament");
let save = document.querySelector("#save");
let entries = document.querySelector("#entries");
let count = 0;

increament.addEventListener("click", () => {
  count += 1;
  counter.textContent = count;
});

decreament.addEventListener("click", () => {
  count -= 1;
  counter.textContent = count;
  if (count < 0) {
    counter.textContent = "Execution stop here!";
  }
});

save.addEventListener("click", () => {
  result = count + " - ";
  entries.textContent += result;
  count = 0;
});
