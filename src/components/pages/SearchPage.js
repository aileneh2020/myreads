import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from '../Book'
import * as BooksAPI from '../../BooksAPI'

class SearchPage extends Component {
	state = {
		query: '',
		searchResults: []
	}

	updateQuery = (query) => {
		this.setState({ query: query }, this.searchBooks)
		console.log(`query is ${this.state.query}`)
	}

	searchBooks() {
		// If no valid entry in search box return empty array
		if (this.state.query === '' || this.state.query === undefined) {
			return this.setState({ searchResults: [] })
			console.log(`invalid search ${this.state.searchResults}`)
		}
		// Search all books in database and load matches to searchResults array
		BooksAPI.search(this.state.query.trim()).then(matches => {
			console.log(matches)
			if (matches.error) {
				return this.setState({ searchResults: [] })
			} else {
				return this.setState({ searchResults: matches })
			}
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
								<Book book={book} />
							</li>)}
					</ol>
				</div>
			</div>
		)
	}
}

export default SearchPage
