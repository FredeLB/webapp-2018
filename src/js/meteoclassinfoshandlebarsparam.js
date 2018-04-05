// MÉTHODE MODULE CLASS

//TEMPLATING
import Handlebars from 'handlebars';
import {capLettre} from './module';


class Meteo {

  constructor(infos) {
    this.infos = infos;
      console.log("infos : " + this.infos.langue);
  }

  getMeteoInformations(infos) {
      
      var maClef = "2cd6bf235d84658ce11b3b2fc2d0bc77";
      var maLangue = this.infos.langue;
      var maRequete = 'http://api.openweathermap.org/data/2.5/weather?id=' + this.infos.villeID + '&units=' + this.infos.units + '&lang=' + maLangue + '&APPID=' + maClef;
    
    // ----------------------- OPENWEATHERMAP -----------------------
    $.ajax({
          'url': maRequete,
          'type': 'GET',
          'format': 'json',
          'cache': 'false', 
          'dataType': 'json'
                                                                                                                           
    }).done(function (data, textStatus, jqXHR) {

       // DONNÉES DE LA JOURNÉE.
      //console.dir(data);

      //
      const tendance = data.weather[0].main;
      const description = data.weather[0].description;

      // CONSOLE
//      console.log(maRequete);
//      console.log("Ville : " + data.name);
//      console.log("Température : " + data.main.temp + "ºC");
        
        
        //IMAGE MÉTÉO
        
      // images météo
        let imgsource = "";
        
        const chemin = "images/";

        switch (tendance) {
            case "Rain":
                imgsource = chemin + "rain.svg";
                break;
            case "Clear":
                imgsource = chemin + "sunny.svg";
                break;
            case "Clouds":
                imgsource = chemin + "cloudy.svg";
                break;
            case "Snow":
                imgsource = chemin + "snow.svg";
                break;
            default:
                imgsource = chemin + "variable.svg";
         }        
        
        //AFFICHAGE
        
//        $(".ville").html( "<h2>" + data.name+ "</h2>");
//        $("#temperature").html("<h2>" + data.main.temp +  "ºC" +"</h2>");
//        $("#humidite").html("<h2>" + data.main.humidity + " %" +"</h2>");
//        $("#tendance").html("<h2>" + description + "</h2>");
//        $("#imgmeteo").html(`<img src="${imgsource}" alt="" width="128 height="128">`);
        
        
        
      //  ---- HANDLEBARS ----
        
        
      const source = $('#handlebars-meteo').html();
      
      const template = Handlebars.compile(source);
      
      const context = { "ville": data.name, "temperature": data.main.temp, "humidite": data.main.humidity + "%", "tendance": tendance, "imagemeteo": imgsource };
      
      const result = template(context);
      
      $(".jumbotron").html(result);


      
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        
        window.console.log('errorThrown : ' + textStatus);
        
    })
      
    .always(function (jqXHR, textStatus) {
        
      console.log('Fin de l\'exécution.');
        
    });
  
    
    return "****** getMeteoInformations() OK. Affichage avec handlebars.";
      
  }
}

export default Meteo
