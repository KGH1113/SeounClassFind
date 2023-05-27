function showImage() {
    var x = document.getElementById("classImage");

    if (x.style.display === "none") {
      x.style.display = "block";
      x.src = "class_image.png"
    } else {
      x.style.display = "none";
    }
}