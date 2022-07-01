
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeElement from './bikeElement.js';
 
function getElements(response){
  let bikeList = [];
  for (let i = 0; i < response.bikes.length; i++){
    bikeList.push(`<p>title: ${response.bikes[i].title}</p>`);
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
