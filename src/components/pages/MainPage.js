import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from '../BookShelf'
import * as BooksAPI from '../../BooksAPI'

class MainPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			books: []
		}
	}

	componentDidMount() {
		BooksAPI.getAll().then(list => {
			console.log(list)
			this.setState({ books: list })
		})
	}

	changeShelf = (book, shelf) => {
		BooksAPI.update(book, shelf).then(response => {
			book.shelf = shelf;
			this.setState(state => ({
				books: state.books.filter(b => b.id !== book.id.concat({book}))
			}))
		})
	}

	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<BookShelf
							name="Currently Reading"
							changeShelf={this.changeShelf}
							books={this.state.books.filter(b => b.shelf === "currentlyReading")}
						/>
						<BookShelf
							name="Want to Read"
							changeShelf={this.changeShelf}
							books={this.state.books.filter(b => b.shelf === "wantToRead")}
						/>
						<BookShelf
							name="Read"
							changeShelf={this.changeShelf}
							books={this.state.books.filter(b => b.shelf === "read")}
						/>
					</div>
				</div>
				<div className="open-search">
					<Link to='/search'>Add a book</Link>
				</div>
			</div>
		)
	}
}

export default MainPage

//for changeShelf function
//update state of book - get copy of list of books
//look for this book in list to see if it's there yet
	//if book in list then update the shelf location
	//otherwise push book to shelf
//update state with new list of books
