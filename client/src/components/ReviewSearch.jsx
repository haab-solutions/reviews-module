import React from 'react';

class ReviewSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
//need to add funcitonality
  }

  render() {
    return (
      <form id="search" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          value={this.state.value}
          placeholder="Search reviews" />
      </form>
    );
  }
}

export default ReviewSearch;