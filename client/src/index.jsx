import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Reviewlist from './components/Reviewlist.jsx';
import OverallReview from './components/OverallReview.jsx';
import CategoryReviews from './components/CategoryReviews.jsx';
import ReviewSearch from './components/ReviewSearch.jsx';

//basic temp React component
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entry: ''
    }
  }

  componentDidMount() {

// GET request to retrieve reviews data
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/api/reviews',
      dataType: 'json',
      success: (data) => {
        this.setState({
          entry: data
        })
        console.log('success');
      },
      error: (err) => {
        console.log('error')
      }
    });
  }

  render() {
    return(
      <div>
        <div>
          <OverallReview data={this.state.entry} /> <ReviewSearch />
        </div>
        <div>
          <CategoryReviews data={this.state.entry} />
        </div>
        <div>
          <Reviewlist data={this.state.entry} />
        </div>
      </div>
    )
  }


};

ReactDOM.render(<App />, document.getElementById('app'));