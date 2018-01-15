import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index'

class BookList extends Component {

  renderList = () => {

    const booksList = this.props.books.map((book, index) => {

      return(
        <li 
          key= { index }
          onClick= { () => this.props.selectBook(book) }>
          { book.title }
        </li>
      )
    })  

    return booksList;

  }

  render() {
    return(
      <ul>
        { this.renderList() }
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return { books: state.books }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);