import React from 'react';
// import { GrSearch } from 'react-icons/gr';
// import css from '/styles/styles.css';



// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       query: ''
//     }
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.search = this.search.bind(this);
//   }

//   handleInputChange (event) {
//     this.setState({
//       query: event.target.value
//     });
//   }

//   search() {
//     this.props.onSearch(this.state.query);
//     // this.setState({
//     //   query: ''
//     // })
//   }

//   render() {
//     return (
//     <div className="search-bar" style={{
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center'}}>
//     <form>
//       <input
//         placeholder="Search"
//         value={this.state.query}
//         onChange={this.handleInputChange}
//       />
//       <button onClick={this.search}> Submit </button>
//     </form>
//     </div>
//     )
//   }
// }

// // var searchStyle = {
// //   width: '20%',
// //   color: 'white',
// //   'border-radius': '24px',
// //   'border-style': 'solid',
// //   'border-width': '1px',
// //   'border-color': 'white',
// //   'background-color': '#2d2d2d',
// //   height: '44px',
// //   margin: '0 auto',

// //   'background-image': "url('https://css.gg/search.css')",
// //   'background-position': '10px center',
// //   'background-repeat': 'no-repeat',
// //   'padding-left': '40px',
// // };


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
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

  render() {
    return (<div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'}}>
      <input placeholder="Search" value={this.state.term} onChange={this.onChange}/>
      <button onClick={this.search}> Submit </button>
    </div>)
  }
}
export default Search;