const tabs = document.querySelectorAll("h2 span");
const contents = document.querySelectorAll("h1");
const descriptions = document.querySelectorAll("p");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.backgroundColor = "";
      contents[i].style.display = "none";
      descriptions[i].style.display = "none";
    }
    tab.style.backgroundColor = "lightgray";
    contents[index].style.display = "block";
    descriptions[index].style.display = "block";
  });
});

tabs[0].click();