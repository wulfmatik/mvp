import React from 'react';
import { GrSearch } from 'react-icons/gr';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '';
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
    <div className="searchForm">
    <form>
      <input
        placeholder="Search for..."
        value={this.state.query}
        onChange={this.handleInputChange}
      />
    <h4><GrSearch/></h4>
    </form>
    </div>
    );
  }
}