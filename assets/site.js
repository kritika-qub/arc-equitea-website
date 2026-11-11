const pages = [
  ["index.html", "Home"],
  ["about.html", "About"],
  ["mission.html", "Our mission"],
  ["ground-rules.html", "Ground rules"],
  ["events.html", "Events & meetings"],
  ["resources.html", "Resources"],
  ["committee.html", "Committee"],
  ["join.html", "Join Equitea"],
  ["concerns.html", "Raise a concern"],
  ["feedback.html", "Feedback & ideas"],
  ["contact.html", "Contact"]
];

const currentFile = location.pathname.split("/").pop() || "index.html";
const nav = pages.map(([href, label]) =>
  `<a href="${href}" ${currentFile === href ? 'aria-current="page"' : ""}>${label}</a>`
).join("");

const logoUrl = window.EQUITEA_CONFIG?.logoUrl || "";
document.querySelectorAll("[data-site-header]").forEach(el => {
  el.innerHTML = `
    <a class="brand" href="index.html" aria-label="ARC Equitea home">
      <img src="${logoUrl}" alt="" class="brand-mark">
      <span><strong>ARC Equitea</strong><small>Astrophysics Research Centre</small></span>
    </a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav id="site-nav" class="site-nav" aria-label="Main navigation">${nav}</nav>`;
  const button = el.querySelector(".menu-toggle");
  const menu = el.querySelector(".site-nav");
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    menu.classList.toggle("is-open", !open);
  });
});

document.querySelectorAll("[data-site-footer]").forEach(el => {
  el.innerHTML = `
    <div><strong>ARC Equitea</strong><p>A welcoming space for conversations about equity, diversity and inclusion in astrophysics and academia.</p></div>
    <div class="footer-links"><a href="join.html">Get involved</a><a href="concerns.html">Raise a concern</a><a href="contact.html">Contact</a></div>
    <small>Independent student- and staff-led community initiative within the Astrophysics Research Centre, Queen's University Belfast. Content last reviewed: November 2026.</small>`;
});

document.querySelectorAll("[data-form-link]").forEach(link => {
  const key = link.dataset.formLink;
  const url = window.EQUITEA_CONFIG?.forms?.[key] || "";
  if (url) {
    link.href = url;
    link.classList.remove("is-placeholder");
    link.textContent = "Open the form";
  } else {
    link.removeAttribute("href");
    link.classList.add("is-placeholder");
    link.textContent = "Form link to be added";
    link.setAttribute("aria-disabled", "true");
  }
});
