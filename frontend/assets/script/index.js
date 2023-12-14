document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('userImage').addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('hidden-file-input').click();
  });

  document.getElementById('hidden-file-input').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var reader = new FileReader();
          reader.onload = function(e) {
              var imageDisplay = document.getElementById('register-page_inner_left_form__upl_img_image-display');
              imageDisplay.innerHTML = '';
              var img = new Image();
              img.src = e.target.result;
              img.style.width = '128px';
              img.style.height = '128px';
              img.style.borderRadius = '50%';
              img.style.objectFit = 'fill';
              imageDisplay.appendChild(img);
          };
          reader.readAsDataURL(this.files[0]);
      }
  });
});

function yonlendir(url) {
    document.location.href = url;
}