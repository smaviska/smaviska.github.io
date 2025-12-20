// =========================
// SECTION FADE-IN
// =========================
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach((section) => observer.observe(section));

// =========================
// STICKY TITLE SHADOW
// =========================
const titles = document.querySelectorAll(".section-title");

window.addEventListener("scroll", () => {
  titles.forEach((title) => {
    title.classList.toggle("is-sticky", title.getBoundingClientRect().top <= 0);
  });
});
// =========================
// MOBILE TAP FEEDBACK
// =========================
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (navigator.vibrate) {
      navigator.vibrate(20);
    }
  });
});

// =========================
// SPLASH SCREEN
// =========================
window.addEventListener("load", () => {
  const splash = document.getElementById("splash");

  setTimeout(() => {
    splash.classList.add("hide");
  }, 1800);
});

