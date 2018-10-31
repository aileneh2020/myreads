# Front-End Nanodegree Project: MyReads

This is a book tracking application which allows a user to keep track of books currently reading, want to read and already read. The user can search for and add a new book to their bookcase by selecting a shelf to put the book on. Books can also be removed from the bookcase.

## Set-Up
1. Clone the [repo](https://github.com/aileneh2020/myreads.git).
2. Install all project dependencies with `npm install`.
3. Start the development server with `npm start`.
4. With your server running, visit the site: [http://localhost:3000](http://localhost:3000).

## Backend Server
The file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in the app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

Not accepting pull requests at this time. For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## Credit

Udacity provided the [starter code](https://github.com/udacity/reactnd-project-myreads-starter.git).

Thank you to [Ryan Waite](https://youtu.be/acJHkd6K5kI) and [Doug Brown](https://youtu.be/OcL7-7cRpkQ) for their video tutorials on how to organize a React project.
