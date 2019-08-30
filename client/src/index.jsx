import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Reviewlist from './components/Reviewlist.jsx';
import OverallReview from './components/OverallReview.jsx';
import CategoryReviews from './components/CategoryReviews.jsx';
import ReviewSearch from './components/ReviewSearch.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entry: '',
      searchTerm: '',
      filtered: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  componentDidMount() {
// GET request to retrieve reviews data
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/api/reviews',
      dataType: 'json',
      success: (data) => {
        this.setState({
          entry: data,
          filtered: data
        })
        console.log('success');
      },
      error: (err) => {
        console.log('error')
      }
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log(search);
    let search = this.state.entry.filter(function(review) {
      return review.custReview.toLowerCase().includes($('#searchTerm').val().toLowerCase());
    });
      this.setState({
        filtered: search,
        searchTerm: $('#searchTerm').val()
      })
  }

  handleGoBack() {
    this.setState({
      searchTerm: ''
    })
    this.componentDidMount();
  }

  render() {
    if (this.state.filtered.length === 0 && this.state.searchTerm !== '') {
      return(
        <div>
            <div>
              <ReviewSearch handleSubmit={this.handleSubmit}/>
              <OverallReview data={this.state.entry} />
            </div>
        <div>
          None of our guests have mentioned "{this.state.searchTerm}"
          <span onClick={this.handleGoBack}>Back to all reviews</span>
        </div>
      </div>
      )
    } else if (this.state.filtered.length === 1 && this.state.searchTerm !== '') {
      return(
        <div>
            <div>
              <ReviewSearch handleSubmit={this.handleSubmit}/>
              <OverallReview data={this.state.entry} />
            </div>
          <div>
            {this.state.filtered.length} guest has mentioned "{this.state.searchTerm}"
            <span onClick={this.handleGoBack}>Back to all reviews</span>
          </div>
          <div>
            <Reviewlist data={this.state.filtered} />
          </div>
        </div>
      )
    } else if (this.state.filtered.length > 1 && this.state.searchTerm !== '') {
      return(
        <div>
            <div>
              <ReviewSearch handleSubmit={this.handleSubmit}/>
              <OverallReview data={this.state.entry} />
            </div>
          <div>
            {this.state.filtered.length} guests have mentioned "{this.state.searchTerm}"
            <span onClick={this.handleGoBack}>Back to all reviews</span>
          </div>
          <div>
            <Reviewlist data={this.state.filtered} />
          </div>
        </div>
      )
    } else {
      return(
        <div>
            <div>
              <ReviewSearch handleSubmit={this.handleSubmit}/>
              <OverallReview data={this.state.entry} />
            </div>
          <div>
            <CategoryReviews data={this.state.entry} />
          </div>
          <div>
            <Reviewlist data={this.state.filtered} />
          </div>
        </div>
      )
    }
  }


};

ReactDOM.render(<App />, document.getElementById('app'));