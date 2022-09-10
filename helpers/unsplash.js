const unsplash = require('unsplash-js');
const axios = require('axios');
const config = require('../config.js');

let getPhotosQuery = (query) => {

  axios.get(`https://api.unsplash.com/search/photos/?query=${query}&client_id=XNm1RszcRDVanNi1WIlCv706rYZQaTDiqNChin0xavc`)
  .then(data => {
    var imagesArray = [];

    data.data.results.forEach((image) => {
      imagesArray.push(image.urls.small)
    });

    this.setState({ images: imagesArray });
  })
  .catch(err => {
    console.log('Error happened during fetching!', err);
  });
}

module.exports.getPhotosQuery = getPhotosQuery;
