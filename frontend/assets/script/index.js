const yonlendir = (url) => {
    document.location.href = url;
};

document.getElementById('custom-button').addEventListener('click', function(event) {
  event.preventDefault(); // Varsayılan form gönderme işlemini engelle
  document.getElementById('hidden-file-input').click();
});

document.getElementById('hidden-file-input').addEventListener('change', function() {
  if (this.files && this.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      var imageDisplay = document.getElementById('image-display');
      imageDisplay.innerHTML = ''; // Önceki resmi temizle
      var img = new Image();
      img.src = e.target.result;
      imageDisplay.appendChild(img);
    };
    reader.readAsDataURL(this.files[0]);
  }
});