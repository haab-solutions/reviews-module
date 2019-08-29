import React from 'react';

class OverallReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: '',
      rating: ''
    }

    this.getData = this.getData.bind(this);
  }

  getData() {
    let data = this.props.data;
    let rating = 0;
    for (let i = 0; i < data.length; i++) {
      rating = rating + data[i].overallRating;
    }
    let average = rating / data.length;

    this.setState({
      total: data.length,
      rating: Number(Math.round(parseFloat(average + 'e' + 2)) + 'e-' + 2).toFixed(2)
    })
  }

  componentDidUpdate(props) {
    if (props !== this.props) {
      this.getData();
    }
  }

  render() {
    return(
      <div>
        <div>
          {this.state.total} Reviews
        </div>
        <div>{this.state.rating} Stars</div>
      </div>
    )
  }
}


export default OverallReview;