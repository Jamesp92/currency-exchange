
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeElement from './currency-service.js';
 
function getElements(response){
  let bikeList = [];
  for (let i = 0; i < response.conversion_rates.length; i++){
    bikeList.push(`<p>title: ${response.conversion_rates[i].title}</p>`);
  }
  $('#showBikes').html(bikeList);
}

async function makeApiCall(){
  const response = await BikeElement.stolenBike();
  getElements(response)
}

$(document).ready(function() {
  $('#stolen').click(function() {
    makeApiCall();
  });
});
