//import './css/main.css';
import './scss/main.scss';

//Importer la librairie dans node_modules
import moment from 'moment';
import 'moment/locale/fr';

//importer {hello, sup, inc} from './js/module';
import * as outils from './js/module';

//Importer la classe DOG
import Dog from './js/dog';

//Importer ma classe meteo
//import Meteo from './js/meteoclassbase';
import Meteo from './js/meteoclassinfoshandlebarsparam';



/* ------------------------- Tests & Exercices ---------------------------- */

/*//hello();
outils.hello();
//sup();


let epiceriesChoisies = ["bacon cheeseburger", "chicken sandwich", "hamburger", "bacon salad"]
            .filter((x) => /bacon/i.test(x) );
console.log("Épiceries : '" + epiceriesChoisies);


console.log("Incrémente 6 de 1 : " + inc(6) );


const leChien = new Dog("Whisky");

console.log(leChien);
console.log(leChien.jappe());*/


/* ------------------------- Date moment ---------------------------- */

var containerDate = document.querySelector('.date');
var maintenant = moment();


function dateDuJour() {

    console.log("Date du jour : " + maintenant.format('LLLL'));

    containerDate.innerHTML = maintenant.format('LLLL');
}

dateDuJour();



//-------------------- CLASS MÉTÉO -------------


const infosMeteo = {
    "villeID":"6325494",
    "units":"metric",
    "langue": "fr"
};

const maMeteo = new Meteo(infosMeteo);

console.log(maMeteo.getMeteoInformations());


