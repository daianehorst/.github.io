// Función para mostrar contenido extra
function mostrarConteudoExtra() {
  var verMais = event.target; // Captura el botón en el que se hizo clic
  var conteudoExtra = verMais.parentElement.querySelector('.conteudo-extra');

  if (conteudoExtra.style.display === 'none' || conteudoExtra.style.display === '') {
    conteudoExtra.style.display = 'inline'; // Mostrar contenido adicional
    verMais.innerHTML = 'Ver Menos'; // Cambie el texto del botón a "Ver Menos"
  } else {
    conteudoExtra.style.display = 'none'; // Ocultar el contenido adicional
    verMais.innerHTML = 'Ver Más'; // Cambia el texto del botón a "Ver Más"
  }
}

