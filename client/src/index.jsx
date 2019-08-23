import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


//basic temp React component
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentDidMount() {

//GET request to retrieve reviews data
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/api/reviews',
      dataType: 'json',
      success: (data) => {
        console.log('success');
      },
      error: () => {
        console.log('error')
      }
    });
  }

  render() {
    return(
      <div></div>
    )
  };


};

ReactDOM.render(<App />, document.getElementById('app'));