import React from 'react';

class ReviewlistEntry extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <div>
        <img src={this.props.data.custUrl}/>{this.props.data.custName}</div>
        <div>{this.props.data.custDate}</div>
        <div>{this.props.data.custReview}</div>
      </div>
    )
  }
};

export default ReviewlistEntry;