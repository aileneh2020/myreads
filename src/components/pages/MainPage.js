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
							books={this.state.books.filter(book => book.shelf === "currentlyReading")}
						/>
						<BookShelf
							name="Want to Read"
							books={this.state.books.filter(book => book.shelf === "wantToRead")}
						/>
						<BookShelf
							name="Read"
							books={this.state.books.filter(book => book.shelf === "read")}
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
