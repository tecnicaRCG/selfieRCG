app.js
function upload() {
  const file = document.getElementById('fileInput').files[0];

  if (!file) {
    alert("Selecciona una imagen");
    return;
  }

  document.getElementById("status").innerText = "OK 🔥 (falta conectar Cloudinary)";
}