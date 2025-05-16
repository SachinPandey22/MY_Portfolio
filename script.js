// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  // DARK MODE TOGGLE
const toggleDark = document.getElementById("darkToggle");

toggleDark.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
// TYPEWRITER EFFECT
const typewriterEl = document.getElementById("typewriter");
const text = "Sachin Pandey";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typewriterEl.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 120);
  }
}
typeWriter();

  