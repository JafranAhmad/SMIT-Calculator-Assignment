let inp = document.querySelector("#input");
let btn = document.querySelectorAll(".button");
let del_btn = document.querySelector("#delete");
let reset_btn = document.querySelector("#reset");
let eqaul_btn = document.querySelector("#eql");

btn.forEach((click) => {
  click.addEventListener("click", function () {
    inp.value += this.textContent;
    formatInputValue();
  });
});
del_btn.addEventListener("click", function () {
  inp.value = inp.value.slice(0, -1);
});
eqaul_btn.addEventListener("click", function () {
  inp.value = eval(inp.value);
});
reset_btn.addEventListener("click", function () {
  inp.value = "";
});

function formatInputValue() {
  let numericValue = parseInt(inp.value.replace(/,/g, ""), 10); // Remove existing commas and convert to a number
  inp.value = numericValue.toLocaleString(); // Format with commas
}
