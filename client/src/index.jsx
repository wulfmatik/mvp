import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    // $.ajax('http://localhost:3000/photos')
    //   .then((data) => {
    //     this.setState({ images: data });
    //   });
    // let requestURL = 'https://picsum.photos/v2/list';

    // return fetch(requestURL)
    // .then((response) => response.json())
    // .then((data) => {
    //   var results = [];
    //   data.forEach((image) => {
    //     results.push(image.download_url)
    //   })
    //   this.setState({images: results});
    //   console.log(this.state)
    // });
    // $.ajax({
    //   type: 'POST',
    //   url: 'http://localhost:3000/photos',
    //   contentType: "application/json; charset=utf-8",
    //   sucess: () => {
    //     $.ajax('http://localhost:3000/photos')
    //       .then((data) => {
    //         this.setState({ images: data });
    //       })
    //   }
    // });
    // this.search();
  }

  search(query) {
    console.log(`${query} was searched`);
    // axios.get(`https://api.unsplash.com/search/photos/?query=${query}&client_id=XNm1RszcRDVanNi1WIlCv706rYZQaTDiqNChin0xavc`)
    // .then(data => {
    //   var imagesArray = [];
    //   data.data.results.forEach((image) => {
    //     imagesArray.push(image.urls.small)
    //   });

    //   this.setState({ images: imagesArray });
    // })
    // .catch(err => {
    //   console.log('Error happened during fetching!', err);
    // });
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/photos',
      contentType: "application/json; charset=utf-8",
      sucess: () => {
        $.ajax('http://localhost:3000/photos')
          .then((data) => {
            this.setState({ images: data });
          })
      }
    });
  }

  render() {
    return (<div>
      <h1 style={{'textAlign': 'center', color: 'white'}}>Photos by Humans</h1>
      <Search onSearch={this.search.bind(this)}/>
      <ImageGallery images={this.state.images}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));