const yonlendir = (url) => {
    document.location.href = url;
};

document.getElementById('custom-button').addEventListener('click', function() {
  document.getElementById('hidden-file-input').click();
});

document.getElementById('hidden-file-input').addEventListener('change', function() {
  // Handle the file selection
  if (this.files.length > 0) {
    console.log("Selected file:", this.files[0].name);
    // You can add more logic here to handle the file
  }
});