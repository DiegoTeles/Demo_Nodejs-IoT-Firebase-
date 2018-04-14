// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyBBJ8_9YeP-RewN2E45oSuviF19DPgA8FE",
    authDomain: "iot-demo-cef2c.firebaseapp.com",
    databaseURL: "https://iot-demo-cef2c.firebaseio.com",
    storageBucket: "iot-demo-cef2c.appspot.com"
};
firebase.initializeApp(config);

//captura meu id e cria um atributo de click alterando o atributo "data-state" da tag img
let lampada = document.querySelector('#lampada');

lampada.addEventListener('onClick', () => {
    let estado = lampada.getAttribute('data-state');

    if (estado == 'off') {
        firebase.database().ref('lampada').set('on');
    } else {
        firebase.database().ref('lampada').set('off');
    }
});

// captura meu id para trocar a imagem e o valor do meu atributo "data-state"
firebase.database().ref('lampada').on('value', snapshot => {
    let l = snapshot.val();

    if (l == 'on') {
        lampada.src = '../img/on.jpg';
        lampada.setAttribute('data-state', 'on');
    } else {
        lampada.src = '../img/off.jpg';
        lampada.setAttribute('data-state', 'off');
    }
});