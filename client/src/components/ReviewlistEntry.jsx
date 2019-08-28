import React from 'react';
// import $ from 'jquery';

class ReviewlistEntry extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   entry: ''
    // }
  }

  // componentDidMount() {
  //   $.ajax({
  //     type: 'GET',
  //     url: 'http://localhost:3000/api/reviews',
  //     dataType: 'json',
  //     success: (data) => {
  //       this.setState({
  //         entry: data
  //       })
  //     }
  //   });
  // }

  render() {
    return(
      <div>
        <h3>Reviews</h3>
        <div className='entry'>{this.props.data}</div>
      </div>
    )
  }
};

export default ReviewlistEntry;