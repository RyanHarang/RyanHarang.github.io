function dropDown() {
  document.getElementById("mobileDrop").classList.toggle("show");
}

anime({
  targets: ".dropdown",
  translateX: 30,
});

anime({
  targets: ".",
  translateX: 30,
});
