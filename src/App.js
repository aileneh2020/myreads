import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MainPage from './components/pages/MainPage'
import SearchPage from './components/pages/SearchPage'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  render() {
    return(
      <div>
        <Route exact path='/' component={ MainPage } />
        <Route exact path='/search' component={ SearchPage } />
      </div>
    )
  }
}

export default BooksApp
