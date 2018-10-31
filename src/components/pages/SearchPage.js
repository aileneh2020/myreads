import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from '../Book'
import * as BooksAPI from '../../BooksAPI'

class SearchPage extends Component {
	state = {
		books: [],
		query: '',
		searchResults: []
	}

	componentDidMount() {
		BooksAPI.getAll().then(list => {
			this.setState({ books: list })
		})
	}

	// Search for books as user types in search box
	updateQuery = (query) => {
		this.setState({ query: query }, this.searchBooks)
	}

	// Search books in database and return array of matches based on query
	searchBooks() {
		if (this.state.query === '' || this.state.query === undefined) {
			return this.setState({ searchResults: [] })
		}
		BooksAPI.search(this.state.query.trim()).then(matches => {
			if (matches === '' || matches === undefined) {
				return this.setState({ searchResults: [] })
			} else {
					// If book already on a shelf, update shelf status in search results
					matches.forEach(b => {
						const listBook = this.state.books.filter(myBook => myBook.id === b.id)
						if (listBook.length) {
							b.shelf = listBook[0].shelf
						}
					})

			return this.setState({ searchResults: matches })
		}})
	}

	// Change a book's shelf based on user selection
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
			<div className="search-books">
				<div className="search-books-bar">
					<Link to='/' className="close-search">Close</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							value={this.state.query}
							onChange={(event) => this.updateQuery(event.target.value)} />
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{this.state.searchResults.map((book, key) =>
							<li key={book.id}>
								<Book book={book} changeShelf={this.changeShelf} />
							</li>
						)}
					</ol>
				</div>
			</div>
		)
	}
}

export default SearchPage
