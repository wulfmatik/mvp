import React from 'react';
import { GrSearch } from 'react-icons/gr';
import css from '/styles.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.onChange = this.handleInputChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleInputChange (event) {
    this.setState({
      query: event.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.query);
    this.setState({
      query: ''
    })
  }

  render() {
    return (
    <div className="search-bar">
    <form>
      <input
        placeholder="Search"
        value={this.state.query}
        onChange={this.handleInputChange}
      />
    </form>
    </div>
    )
  }
}

export default Search;