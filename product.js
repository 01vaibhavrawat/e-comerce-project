(function onload() {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  expandImg.src = tab1.src;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
  expandImg.style.width = "100%";
})();

function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
  expandImg.style.width = "100%";
}



