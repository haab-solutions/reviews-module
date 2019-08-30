import React from 'react';

class ReviewSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <form id="search" onSubmit={this.props.handleSubmit}>
          <input id="searchTerm"
            type="text"
            placeholder="Search reviews" />
        </form>
      </span>
    );
  }
}

export default ReviewSearch;