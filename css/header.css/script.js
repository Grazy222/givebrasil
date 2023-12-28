const imageContainer = document.querySelectorAll('.image-container');

imageContainer.forEach((container) => {
  const caption = container.querySelector('.caption');

  container.addEventListener('click', () => {
    caption.style.display = 'block';
  });
});

function showInfo(infoId) {
  // Oculta todas as áreas de informações
  var infoElements = document.getElementsByClassName("info");
  for (var i = 0; i < infoElements.length; i++) {
      infoElements[i].style.display = "none";
  }

  // Exibe a área de informações específica
  var specificInfo = document.getElementById(infoId + "Info");
  specificInfo.style.display = "block";

  // Fecha o menu (opcional)
  var navList = document.getElementById("navList");
  navList.classList.remove("show");
}
/*fecha header */