import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import ImageGallery from './components/ImageGallery.jsx';

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

  }

  search(query) {

  }

  render() {
    return (<div>
      <h1>Art by Humans</h1>
      <Search onSearch={this.search.bind(this)}/>
      <ImageGallery images={this.state.images}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));