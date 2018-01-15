import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

  render() {

    if(!this.props.book) {
      return <p>Select a book to get started!</p>;
    }
  
    return(
      <div>
        <h3>Detail for: { this.props.book.title }</h3>
        <span>{ this.props.book.author }</span>
        <span>{ this.props.book.link }</span>
        <p>{ this.props.book.description }</p>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return { book: state.activeBook }
}

export default connect(mapStateToProps)(BookDetail);