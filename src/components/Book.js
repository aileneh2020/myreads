import React, { Component } from 'react'
import ChangeShelf from './ChangeShelf'
import * as BooksAPI from '../BooksAPI'

class Book extends Component {

	//changeShelf is still a work in progress
	changeShelf = (book, shelf) => {
  	BooksAPI.update(book, shelf).then(response => {
  		//update state of book - get copy of list of books
  		//look for this book in list to see if it's there yet
  			//if book in list then update the shelf location
  			//otherwise push book to shelf
  		//update state with new list of books

  		book.shelf = shelf;
  		this.setState(state => ({
  			books: state.books.filter(b => b.id !== book.id.concat({book}))
  		}))
  	})
  }

	render() {

		let bookImageURL = (this.props.book.imageLinks && `url(${this.props.book.imageLinks.thumbnail})`);
		const authors = (this.props.book.authors && this.props.book.authors.join(' & '));

		return (
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage: bookImageURL
						}}>
					</div>
					<div className="book-shelf-changer">
						<select value={this.props.book.shelf || "none"}>
							<option value="move" disabled>Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{this.props.book.title}</div>
				<div className="book-authors">{authors}</div>
			</div>
		)
	}
}

export default Book
