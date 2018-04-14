//Importamos a lib do cylon
var Cylon = require('cylon');

Cylon.robot({
    connections: {
        // Aqui informamos qual arduino e sua porta
        // podendo ter mais do que 1 arduino 
        arduino: { adaptor: 'firmata', port: '/dev/ttyUSB0' }
    },

    // Setamos quais os sensores ou dispositivos
    // conectados ao arduino e suas respectivas portas
    devices: {
        led: { driver: 'led', pin: 13, connection: "arduino" }
    },

    work: function(my) {
        every((1).second(), my.led.toggle);

    }
}).start();