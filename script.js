document.addEventListener("DOMContentLoaded", function() {
  const section = document.querySelector(".popular-courses");

  section.addEventListener("click", function() {
    section.classList.toggle("active");
  });
});