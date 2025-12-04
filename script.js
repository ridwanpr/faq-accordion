const accordions = document.querySelectorAll(".accordion__header");

const handleClick = (e) => {
  const plusIcon = "/assets/images/icon-plus.svg";
  const minusIcon = "/assets/images/icon-minus.svg";

  const icon = e.currentTarget.querySelector("img");
  const content = e.currentTarget.nextElementSibling;

  content.classList.toggle("active");

  if (content.classList.contains("active")) {
    icon.setAttribute("src", minusIcon);
  } else {
    icon.setAttribute("src", plusIcon);
  }
};

accordions.forEach((accordion) => {
  accordion.addEventListener("click", handleClick);
});
