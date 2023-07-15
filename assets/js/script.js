function dropDown() {
  document.getElementById("mobileDrop").classList.toggle("show");
}

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
  targets: ".btn-get-started",
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
