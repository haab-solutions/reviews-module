import React from 'react';

class CategoryReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accuracyRating: '',
      commRating: '',
      cleanRating: '',
      locationRating: '',
      checkinRating: '',
      valueRating: ''
    }

    this.getAccData = this.getAccData.bind(this);
    this.getCommData = this.getCommData.bind(this);
    this.getCleanData = this.getCleanData.bind(this);
    this.getLocationData = this.getLocationData.bind(this);
    this.getCheckinData = this.getCheckinData.bind(this);
    this.getValueData = this.getValueData.bind(this);
  }

  getAccData() {

    let data = this.props.data;
    let rating = 0;
    for (let i = 0; i < data.length; i++) {
      rating = rating + data[i].accuracyRating;
    }
    let average = rating / data.length;

    this.setState({
      accuracyRating: Number(Math.round(parseFloat(average + 'e' + 2)) + 'e-' + 2).toFixed(2)
    })
  }

  getCommData() {

    let data = this.props.data;
    let rating = 0;
    for (let i = 0; i < data.length; i++) {
      rating = rating + data[i].commRating;
    }
    let average = rating / data.length;

    this.setState({
      commRating: Number(Math.round(parseFloat(average + 'e' + 2)) + 'e-' + 2).toFixed(2)
    })
  }

  getCleanData() {

    let data = this.props.data;
    let rating = 0;
    for (let i = 0; i < data.length; i++) {
      rating = rating + data[i].cleanRating;
    }
    let average = rating / data.length;

    this.setState({
      cleanRating: Number(Math.round(parseFloat(average + 'e' + 2)) + 'e-' + 2).toFixed(2)
    })
  }

  getLocationData() {

    let data = this.props.data;
    let rating = 0;
    for (let i = 0; i < data.length; i++) {
      rating = rating + data[i].locationRating;
    }
    let average = rating / data.length;

    this.setState({
      locationRating: Number(Math.round(parseFloat(average + 'e' + 2)) + 'e-' + 2).toFixed(2)
    })
  }

  getCheckinData() {

    let data = this.props.data;
    let rating = 0;
    for (let i = 0; i < data.length; i++) {
      rating = rating + data[i].checkinRating;
    }
    let average = rating / data.length;

    this.setState({
      checkinRating: Number(Math.round(parseFloat(average + 'e' + 2)) + 'e-' + 2).toFixed(2)
    })
  }

  getValueData() {

    let data = this.props.data;
    let rating = 0;
    for (let i = 0; i < data.length; i++) {
      rating = rating + data[i].valueRating;
    }
    let average = rating / data.length;

    this.setState({
      valueRating: Number(Math.round(parseFloat(average + 'e' + 2)) + 'e-' + 2).toFixed(2)
    })
  }

  componentDidUpdate(props) {
    if (props !== this.props) {
      this.getAccData();
      this.getCommData();
      this.getCleanData();
      this.getLocationData();
      this.getCheckinData();
      this.getValueData();
    }
  }

  render() {
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <td>Accuracy {this.state.accuracyRating}</td>
              <td>Location {this.state.locationRating}</td>
            </tr>
            <tr>
              <td>Communication {this.state.commRating}</td>
              <td>Check-in {this.state.checkinRating}</td>
            </tr>
            <tr>
              <td>Cleanliness {this.state.cleanRating}</td>
              <td>Value {this.state.valueRating}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}




export default CategoryReviews;