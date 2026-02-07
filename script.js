const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg"];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("slide").src = images[index];
}, 2500);
