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
    delay: 100,
    easing: "easeInOutQuart",
  },
});
