import React from 'react';
import Ratings from 'react-ratings-declarative';

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
      rating += data[i].accuracyRating;
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
      rating += data[i].commRating;
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
      rating += data[i].cleanRating;
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
      rating += data[i].locationRating;
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
      rating += data[i].checkinRating;
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
      rating += data[i].valueRating;
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
              <td>Accuracy</td>
              <td>
                <span>
                  <Ratings rating={Number(this.state.accuracyRating)} widgetRatedColors="007D8C" widgetDimensions="20px" widgetSpacings="1px">
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                  </Ratings>
                </span>
              </td>
              <td>Location</td>
              <td>
                <span>
                  <Ratings rating={Number(this.state.locationRating)} widgetRatedColors="007D8C" widgetDimensions="20px" widgetSpacings="1px">
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                  </Ratings>
                </span>
              </td>
            </tr>
            <tr>
              <td>Communication</td>
              <td>
                <span>
                  <Ratings rating={Number(this.state.commRating)} widgetRatedColors="007D8C" widgetDimensions="20px" widgetSpacings="1px">
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                  </Ratings>
                </span>
              </td>
              <td>Check-in</td>
              <td>
                <span>
                  <Ratings rating={Number(this.state.checkinRating)} widgetRatedColors="007D8C" widgetDimensions="20px" widgetSpacings="1px">
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                  </Ratings>
                </span>
              </td>
            </tr>
            <tr>
              <td>Cleanliness</td>
              <td>
                <span>
                  <Ratings rating={Number(this.state.cleanRating)} widgetRatedColors="007D8C" widgetDimensions="20px" widgetSpacings="1px">
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                  </Ratings>
                </span>
              </td>
              <td>Value</td>
              <td>
                <span>
                  <Ratings rating={Number(this.state.valueRating)} widgetRatedColors="007D8C" widgetDimensions="20px" widgetSpacings="1px">
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                  </Ratings>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}




export default CategoryReviews;