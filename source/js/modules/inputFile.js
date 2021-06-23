const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const fileChooser = document.querySelector('input[type="file"]')
const preview = document.querySelector('.file-preview');
const removeIcon = document.querySelector('.remove-button')

fileChooser.addEventListener('change', function() {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  
  let matches = FILE_TYPES.some(function(it) {
    return fileName.endsWith(it);
  });
  
  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', function() {
      preview.src = reader.result;
      removeIcon.style.display = 'flex';
    })
    reader.readAsDataURL(file);
  }
})

removeIcon.addEventListener('click', function() {
    removeIcon.style.display = 'none';
    preview.src = '';
    fileChooser.reset();
})