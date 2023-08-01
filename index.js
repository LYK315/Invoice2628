
var coName = document.querySelector("#coName");
var coNameText = document.querySelector("#co-name");

coName.addEventListener("input", (event) => {
  coNameText.innerText = (coName.value)
});
