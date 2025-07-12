const filter_button = document.querySelectorAll(".filter_button button");
const filter_cards = document.querySelectorAll(".filter_cards .card");

const filterable_cards = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  filter_cards.forEach((card) => {
    card.classList.add("hide");

    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
    }
  });
  console.log(e.target);
};
filter_button.forEach((button) =>
  button.addEventListener("click", filterable_cards)
);
