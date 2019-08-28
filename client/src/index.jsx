import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import ReviewlistEntry from './components/ReviewlistEntry.jsx';

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
        console.log('success');
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  render() {
    return(
      <div>
        <ReviewlistEntry data={this.state.entry} />
      </div>
    )
  }


};

ReactDOM.render(<App />, document.getElementById('app'));