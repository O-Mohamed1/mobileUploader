function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
  
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      fetch('/upload', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => alert(data.message))
        .catch(error => console.error('Error:', error));
    } else {
      alert('Please choose a file to upload.');
    }
  }
  
  function uploadPhoto() {
    const photoInput = document.getElementById('photoInput');
    const photo = photoInput.files[0];
  
    if (photo) {
      const formData = new FormData();
      formData.append('photo', photo);
  
      // You can implement photo upload logic here
      // Use fetch or another method to handle photo uploads
      alert('Photo upload functionality not implemented in this example.');
    } else {
      alert('Please choose a photo to upload.');
    }
  }
  