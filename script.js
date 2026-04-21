// Scroll fade-in
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  navLinks.forEach((link) => {
    link.style.color =
      link.getAttribute("href") === "#" + current ? "var(--accent)" : "";
  });
});
