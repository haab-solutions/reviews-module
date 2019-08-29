import React from 'react';

class ReviewlistEntry extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   entry: ''
    // }
  }

  render() {
    return(
      <div>
        <h3>Reviews</h3>
        <div className='entry'>{this.props.data.custReview}</div>
      </div>
    )
  }
};

export default ReviewlistEntry;