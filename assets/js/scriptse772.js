

// Portada parallax
$('.parallax-portada').parallax({
  imageSrc: 'assets/img/portada-1-comprimido.jpg'
});

// $('.parallax-graciass').parallax({
//   imageSrc: 'assets/img/portada-1-comprimido.jpg'
// });


// Confirmar asistencia parallax
$('.parallax-confirmanos').parallax({
  imageSrc: 'assets/img/confirmanos-5-comprimida.JPG'
});

// $('.parallax-graciasss').parallax({
//   imageSrc: 'assets/img/confirmanos-5-comprimida.JPG'
// });



// Gracias parallax
$('.parallax-gracias').parallax({
  imageSrc: 'assets/img/gracias-4-comprimido.jpg'
});

// ----------------------

// Cuenta regresiva
var fechaInicio = new Date().getTime();
var fechaFin = new Date(fechaCuentaRegresiva).getTime();
var diff = (fechaFin - fechaInicio) / 1000;



  // Config countdown
  $('.countdown').ClassyCountdown({

    theme: "black",

    labelsOptions: {
      style: 'font-size: 15px;font-family: \'Montserrat\', sans-serif;'
    },

    style: {
      // textResponsive: 0.6,
      secondsElement: {
        gauge: {
          fgColor: "#486958"
        }
      },

      days: {
        gauge: {
          thickness: 0.01,
          fgColor: colorCirculosCuentaRegresiva
        },
        textCSS: 'color:' + colorTextoCuentaRegresiva + ';font-size: 30px !important;font-family: \'Montserrat\', sans-serif;'
      },


      hours: {
        gauge: {
          thickness: 0.01,
          fgColor: colorCirculosCuentaRegresiva
        },
        textCSS: 'color:' + colorTextoCuentaRegresiva + ';font-size: 30px !important;font-family: \'Montserrat\', sans-serif;'
      },


      minutes: {
        gauge: {
          thickness: 0.01,
          fgColor: colorCirculosCuentaRegresiva
        },
        textCSS: 'color:' + colorTextoCuentaRegresiva + ';font-size: 30px !important;font-family: \'Montserrat\', sans-serif;'
      },


      seconds: {
        gauge: {
          thickness: 0.01,
          fgColor: colorCirculosCuentaRegresiva
        },
        textCSS: 'color:' + colorTextoCuentaRegresiva + ';font-size: 30px !important;font-family: \'Montserrat\', sans-serif;'
      }


    },

    // Fecha finalizacion
    end: $.now() + diff,

    // Al finalizar
    onEndCallback: function () {
      // $('.cuenta-regresiva').hide();
    }

  });