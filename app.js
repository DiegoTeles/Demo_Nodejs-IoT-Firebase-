var five = require("johnny-five");
var firebase = require("firebase");

var board = new five.Board();

board.on("ready", function() {
    var led = new five.Led(13);
    var rele = new five.Relay(12);

    this.repl.inject({
        led: led,
        rele: rele
    });

    // Initialize Firebase
    // TODO: Replace with your project's customized code snippet
    var config = {
        apiKey: "AIzaSyBBJ8_9YeP-RewN2E45oSuviF19DPgA8FE",
        authDomain: "iot-demo-cef2c.firebaseapp.com",
        databaseURL: "https://iot-demo-cef2c.firebaseio.com",
        storageBucket: "iot-demo-cef2c.appspot.com"
    };
    firebase.initializeApp(config);

    var starCountRef = firebase.database().ref("lampada").on("value", function(snapshot) {

        let lampada = snapshot.val();
        if (lampada == 'on') {
            rele.off();
            led.on();
        } else {
            rele.on();
            led.off();
        }


    });


});