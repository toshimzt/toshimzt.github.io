function openModal() {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  var img = document.querySelector('img[alt="Research Image"]');
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Close the modal when clicking outside of the image
window.onclick = function(event) {
  var modal = document.getElementById("imageModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

