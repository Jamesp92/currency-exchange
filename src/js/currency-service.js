

export default class BikeElement {  
  static stolenBike() {
    return fetch(`https://bikeindex.org:443/api/v3/search`)
      .then(response =>{
        if (!response.ok){
          throw Error("ERROR");
        }
        return response.json();
    //  console.log(response);
  })
  .catch( error => {
   console.log(error)
  });
}
}



