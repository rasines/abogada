$(document).ready(function() {
    // Mostrar la primera pestaña por defecto
    $('.service-tabs li:first').addClass('active');
    $('.tab-content:first').addClass('active').css({ height: "auto", opacity: 1 });

    $('.service-tabs li').on('click touchstart', function(e) {
        e.preventDefault(); // Evitar eventos fantasmas en móviles

        if ($(this).hasClass('active')) return;

        // Quitar la clase active de todas las pestañas y ocultar el contenido
        $('.service-tabs li').removeClass('active');
        $('.tab-content.active').removeClass('active').slideUp(300).css({ opacity: 0 });

        // Activar la pestaña seleccionada
        $(this).addClass('active');
        var tabId = $(this).data('tab');
        var newTab = $('#tab-' + tabId);

        // Mostrar nuevo contenido con animación
        newTab
            .addClass('active')
            .css({ opacity: 1 })
            .slideDown(300);
    });
});
