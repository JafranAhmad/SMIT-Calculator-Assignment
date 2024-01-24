let inp = document.querySelector("#input");
let btn = document.querySelectorAll(".button");
let del_btn = document.querySelector("#delete");
let reset_btn = document.querySelector("#reset");
let eqaul_btn = document.querySelector("#eql");

btn.forEach((click) => {
  click.addEventListener("click", function () {
    inp.value += this.textContent;
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

