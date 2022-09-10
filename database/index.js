const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/photos');

let photoSchema = mongoose.Schema({
  imageId: Number,
  name: String,
  url: String,
  category: String
});

let Photo = mongoose.model('Photo', photoSchema);

let save = (photos) => {
  if (photos.length > 0) {
    let photoArray = photos.map((photoData) => {
      var newPhoto = new Photo(photoData);
      return newPhoto.save()
        .catch((err)=> {
          if (err.code !== 11000) {
            return err;
          }
        })
    });
    return Promise.all(PhotoArray);
  }
}
module.exports.Photo = Photo;
module.exports.save = save;