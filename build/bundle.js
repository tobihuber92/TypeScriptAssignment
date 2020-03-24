(function () {
    'use strict';

    const helloWorld = "Hello world";
    class Beispiel extends HTMLElement {
        constructor() {
            super();
            this.innerHTML = "<h1>Hello World</h1>";
        }
    }

    function alertMe() {
        alert("ATTENTION PLEASE");
    }

    console.log(helloWorld);
    customElements.define('my-beispiel', Beispiel);
    alertMe();

}());
