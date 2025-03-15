$(document).ready(function() {
    // Mostrar la primera pestaña por defecto con animación
    $('.service-tabs li:first').addClass('active');
    $('.tab-content:first').addClass('active').css({ visibility: "visible", height: "auto" });

    $('.service-tabs li').click(function() {
        if ($(this).hasClass('active')) return;

        // Remover active y ocultar contenido con animación
        $('.service-tabs li').removeClass('active');
        $('.tab-content.active')
            .removeClass('active')
            .css({ height: $('.tab-content.active').outerHeight() }) // Fija la altura antes de ocultar
            .animate({ height: 0 }, 300, function() {
                $(this).css({ visibility: "hidden" });
            });

        // Activar la nueva pestaña
        $(this).addClass('active');
        var tabId = $(this).data('tab');
        var newTab = $('#tab-' + tabId);

        // Mostrar nuevo contenido con animación
        newTab
            .css({ visibility: "visible", height: 0 }) // Inicializa altura en 0
            .addClass('active')
            .animate({ height: newTab.prop('scrollHeight') }, 300); // Expande a su altura completa
    });
});
