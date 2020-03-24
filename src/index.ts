import { helloWorld, Beispiel } from './myModule';
import { alertMe } from './myOtherModule';

console.log(helloWorld);
customElements.define('my-beispiel', Beispiel)

alertMe();