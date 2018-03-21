//import './css/main.css';
import './scss/main.scss';
import {hello, sup, inc} from './js/module';


hello();
//sup();


let epiceriesChoisies = ["bacon cheeseburger", "chicken sandwich", "hamburger", "bacon salad"]
            .filter((x) => /bacon/i.test(x) );
console.log("Épiceries : '" + epiceriesChoisies);


console.log("Incrémente 6 de 1 : " + inc(6) );
