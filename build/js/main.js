let divChosen = document.querySelectorAll(".box-st.ba .squers .div-sq");

divChosen.forEach((e) => {
  e.addEventListener("click", (e) => {
    divChosen.forEach((e) => {
      e.classList.remove("chosen");
    });
    e.target.classList.add("chosen");
  });
});
