$(document).ready(function() {
    // Mostrar la primera pestaña por defecto
    $('.service-tabs li:first').addClass('active');
    $('.tab-content:first').addClass('active').show();
  
    $('.service-tabs li').click(function() {
      // Quitar la clase active de todas las pestañas y ocultar el contenido
      $('.service-tabs li').removeClass('active');
      $('.tab-content').removeClass('active').hide();
  
      // Activar la pestaña seleccionada
      $(this).addClass('active');
      var tabId = $(this).data('tab');
      // Mostrar el contenido correspondiente
      $('#tab-' + tabId).fadeIn('fast').addClass('active');
    });
  });
  