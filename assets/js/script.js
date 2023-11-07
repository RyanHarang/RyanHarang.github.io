function dropDown() {
  document.getElementById("mobileDrop").classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const pdfIframe = document.getElementById("pdfIframe");
  let isVisible = false;

  toggleButton.addEventListener("click", function () {
    if (isVisible) {
      pdfIframe.style.display = "none";
      toggleButton.textContent = "Show PDF";
    } else {
      pdfIframe.style.display = "block";
      toggleButton.textContent = "Hide PDF";
    }
    isVisible = !isVisible;
  });
});

anime({
  targets: ".dropdown",
  translateX: 30,
});

anime({
  targets: ".logo",
  translateY: 5,
});

anime({
  targets: ".intro",
  width: ["60%", "80%"],
  easing: "easeInOutQuad",
});

anime({
  targets: ".home-pics",
  borderRadius: ["100%", "5%"],
  easing: "easeInOutQuad",
});

anime({
  targets: ".read-more",
  scale: {
    value: 1.3,
    duration: 700,
    delay: 100,
  },
});

anime({
  targets: ".nav-link",
  scale: {
    value: 1.1,
    duration: 1000,
    delay: 100,
  },
});

anime({
  targets: ".contact-method",
  scale: {
    value: 1.1,
    duration: 700,
    delay: 200,
  },
});
