function dropDown() {
  document.getElementById("mobileDrop").classList.toggle("show");
}

anime({
  targets: ".dropdown",
  translateX: 30,
});

anime({
  targets: ".links",
  scale: {
    value: 1.1,
    duration: 1000,
    delay: 1000,
    easing: "easeInOutQuart",
  },
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
    value: 1.5,
    duration: 700,
    delay: 200,
  },
});
