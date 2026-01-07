document.addEventListener("DOMContentLoaded", () => {
  const signIn = document.querySelector(".sign-in");
  const signUp = document.querySelector(".sign-up");
  const wrapper = document.querySelector(".wrapper");
  const btnSlide = document.querySelector(".btn-slide");
  const container = document.querySelector(".container");

  btnSlide.addEventListener("click", () => {
    container.classList.toggle("active");
  });

  signIn.addEventListener("click", (e) => {
    e.preventDefault();
    wrapper.classList.remove("active");
  });
  signUp.addEventListener("click", (e) => {
    e.preventDefault();
    wrapper.classList.add("active");
  });
});
