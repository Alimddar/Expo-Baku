document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('userImage').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('hidden-file-input').click();
    });

    document.getElementById('hidden-file-input').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var imagePlaceholder = document.getElementById('register-page_inner_left_form__upl_img_image-display');
                imagePlaceholder.innerHTML = ''; // Placeholder'ı temizle
                var img = new Image();
                img.src = e.target.result;
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.borderRadius = '50%';
                img.style.objectFit = 'cover';
                imagePlaceholder.appendChild(img);
            };
            reader.readAsDataURL(this.files[0]);
        }
    });
});

function yonlendir(url) {
    document.location.href = url;
};