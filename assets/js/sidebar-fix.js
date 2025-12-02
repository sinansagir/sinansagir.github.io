document.addEventListener("DOMContentLoaded", function () {
  const selectors = [
    "#sidebar",
    ".sidebar",
    "aside",
    "nav.sidebar",
    ".site-sidebar",
    ".sidebar-nav",
    ".site-navigation"
  ];
  for (const sel of selectors) {
    const el = document.querySelector(sel);
    if (el) {
      el.style.maxHeight = "100vh";
      el.style.overflowY = "auto";
      el.style.paddingRight = "12px";
      el.style.boxSizing = "border-box";
      // add a class so we can visually inspect
      el.classList.add("sidebar-fix-applied");
      // stop after the first match
      break;
    }
  }
});
