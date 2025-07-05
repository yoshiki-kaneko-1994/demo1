"use strict";

{
  document.querySelectorAll("header li a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }
    });
  });
}

{
  document.querySelector(".top").addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector("header").scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  });
}

{
  const top = document.querySelector(".top");

  function topStyle(element, translateY, opacity) {
    element.style.transform = `translateY(${translateY}px)`;
    element.style.transition = "transform .3s, opacity .3s";
    element.style.opacity = opacity;
  }

  window.addEventListener("scroll", () => {
    const rect = document.querySelector("header").getBoundingClientRect();

    if (rect.bottom < 0) {
      topStyle(top, "0", "1");
    } else {
      topStyle(top, "160", "0");
    }
  });
}
