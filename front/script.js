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
    const title = document.querySelector('.tag')

    title.textContent = ''
    fileNameElement.textContent = file.name;

    const formData = new FormData();
    formData.append('uploadedFile', file);
  
    fetch('http://127.0.0.1:5000/', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        // File uploaded and processed successfully
        console.log('File uploaded and processed successfully');
      } else {
        // Error uploading file
        console.log('Error uploading file');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };
