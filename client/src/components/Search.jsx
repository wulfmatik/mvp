import React from 'react';
import $ from 'jquery';
// import { GrSearch } from 'react-icons/gr';
// import css from '/styles/styles.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
    this.checkStorage = this.checkStorage.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
    this.setState({
      term: ''
    })
  }

  checkStorage(e) {
    console.log(this.props.images)
  }

  render() {
    return (<div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'}}>
      <input placeholder="Search" value={this.state.term} onChange={this.onChange}/>
      <button onClick={this.search}> Submit </button>
      <button onClick={this.checkStorage}> Stored Images</button>
    </div>)
  }
}
export default Search;