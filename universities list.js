const btn = document.querySelector("button");
const input = document.querySelector("input");
const p = document.getElementById("para");
const showUni = document.getElementById("show");
const totalUniDisplay = document.getElementById("totalUniDisplay");

let uni = {
  getData: function (inputValue) {
    const url = `http://universities.hipolabs.com/search?country=${inputValue}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.displayUni(data));
  },
  displayUni: function (result) {
    let uniNames = result.map((data) => data.name).join("<br> ");
    let numberOfUni = result.length;

    p.innerHTML = uniNames;
    userValue = input.value;
    showUni.innerHTML = `${userValue} - UNIVERSITY LIST`;
    showUni.style.textTransform = "UpperCase";
    totalUniDisplay.innerHTML = `<b><em>Total Number of Unversities: ${numberOfUni}</em></b>`;
    totalUniDisplay.style.display = "block";
    console.log(uniNames);
  },
};

btn.addEventListener("click", () => {
  let inputValue = input.value;
  if (inputValue) {
    uni.getData(inputValue);
  } else {
    p.innerHTML = "Please enter a country name";
  }
});

input.addEventListener("keyup", (e) => {
  e.preventDefault();
  let inputValue = input.value;
  if (e.key === "Enter" && inputValue) {
    uni.getData(inputValue);
  } else {
    p.innerHTML = "Please enter a country name";
  }
});
