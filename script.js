gsap.registerPlugin(ScrollTrigger);

/* ---------- Hero fade on scroll ---------- */
gsap.to(".hero-title", {
  opacity: 0.15,
  y: -60,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
gsap.to(".hero-tagline", {
  opacity: 0,
  y: -20,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "60% top",
    scrub: true
  }
});

/* ---------- Mission statement reveal ---------- */
gsap.from(".mission-statement", {
  opacity: 0,
  y: 40,
  duration: 1,
  scrollTrigger: {
    trigger: ".mission",
    start: "top 75%",
  }
});

/* ---------- Product intro ---------- */
gsap.from(".product-intro", {
  opacity: 0,
  y: 30,
  duration: 0.9,
  scrollTrigger: {
    trigger: ".product-intro",
    start: "top 80%",
  }
});

/* ---------- Feature rows: text + graphic slide in ---------- */
document.querySelectorAll(".feature").forEach((el) => {
  const fromLeft = !el.classList.contains("reverse");
  gsap.from(el.querySelector(".feature-visual"), {
    opacity: 0,
    x: fromLeft ? -60 : 60,
    duration: 1,
    scrollTrigger: { trigger: el, start: "top 75%" }
  });
  gsap.from(el.querySelector(".feature-text"), {
    opacity: 0,
    x: fromLeft ? 60 : -60,
    duration: 1,
    delay: 0.1,
    scrollTrigger: { trigger: el, start: "top 75%" }
  });
});

/* ---------- Story + Contact + Notify fade in ---------- */
gsap.from(".story h2, .story p", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: { trigger: ".story", start: "top 75%" }
});
gsap.from(".contact h2, .contact p, .contact-email, .social-links", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: { trigger: ".contact", start: "top 75%" }
});
gsap.from(".notify h2, .notify p, .notify-form", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: { trigger: ".notify", start: "top 80%" }
});

/* ---------- Mask graphics (simple SVG silhouettes, one per feature) ---------- */
const maskSVG = (highlight) => `
<svg viewBox="0 0 300 360" width="100%" height="100%">
  <path d="M130 20 C170 15, 210 35, 220 75 C226 100, 222 122, 212 140
    C230 148, 240 165, 237 185 C232 210, 208 224, 186 227
    C196 250, 198 275, 190 300 L110 300
    C106 275, 100 252, 90 230 C68 224, 52 208, 47 185
    C42 160, 52 135, 72 118 C64 98, 62 75, 70 55
    C82 30, 105 22, 130 20 Z"
    fill="none" stroke="#f4f4f2" stroke-width="1.5" opacity="0.9"/>
  <ellipse cx="150" cy="90" rx="34" ry="19" fill="none" stroke="#f4f4f2" stroke-width="1.5" opacity="0.9"/>
  ${highlight === 1 ? `<path d="M118 128 C138 118, 165 118, 185 130" fill="none" stroke="#f4f4f2" stroke-width="3" stroke-linecap="round"/>` : ""}
  ${highlight === 2 ? `<g fill="#f4f4f2"><circle cx="142" cy="155" r="2"/><circle cx="152" cy="152" r="2"/><circle cx="162" cy="155" r="2"/><circle cx="147" cy="163" r="2"/><circle cx="157" cy="163" r="2"/></g>` : ""}
  ${highlight === 3 ? `<ellipse cx="150" cy="90" rx="34" ry="19" fill="none" stroke="#f4f4f2" stroke-width="3" opacity="1"/>` : ""}
</svg>`;

document.getElementById("mask-svg-1").innerHTML = maskSVG(1);
document.getElementById("mask-svg-2").innerHTML = maskSVG(2);
document.getElementById("mask-svg-3").innerHTML = maskSVG(3);

/* ---------- Notify form (placeholder handler) ---------- */
document.querySelector(".notify-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = e.target.querySelector("button");
  const original = btn.textContent;
  btn.textContent = "You're In";
  setTimeout(() => (btn.textContent = original), 2200);
});
