const dropArea = document.getElementById('dropArea');


dropArea.ondragover = function(e) {
    e.preventDefault();
    dropArea.classList.add('active');
  };

  dropArea.ondragleave = function() {
    dropArea.classList.remove('active');
  };

  dropArea.ondrop = function(e) {
    e.preventDefault();
    dropArea.classList.remove('active');

    const file = e.dataTransfer.files[0];
    const fileNameElement = document.querySelector('.file-name');
    console.log(file)
    fileNameElement.textContent = file.name;
  };
