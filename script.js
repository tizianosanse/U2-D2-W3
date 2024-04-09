const form = document.getElementById("form");
const inputName = document.getElementById("name");
const remove = document.getElementById("remove");
const utentName = "name-utent";
const ul = document.getElementById("ul");
const li = document.createElement("li");
let navName = document.getElementById("navName");

let arrayOfNames = [];
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(inputName.value);
  arrayOfNames.push(inputName.value);
  const namesUtents = JSON.parse(
    localStorage.setItem("name-utent", inputName.value)
  );

  if (utentName) {
    const stringOfNamesUtents = JSON.stringify(namesUtents);
    li.innerText = stringOfNamesUtents;
    ul.appendChild(li);
  }
  form.reset();
});

remove.addEventListener("click", (event) => {
  event.preventDefault();
  localStorage.getItem(utentName);
  if (utentName) {
    li.innerText = "";
    localStorage.removeItem(utentName);
  }
});
