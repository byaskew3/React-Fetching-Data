import Navbar from './components/Navbar';
import Contact from './views/Contact'
import Home from './views/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react'
import News from './views/News';
import Feed from './views/Feed';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      user: {},
      name: 'Christian',
      age: 27
    }
  }

  addToAge = () => {
    this.setState({age: this.state.age + 1})
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/contact' element={<Contact age123={this.state.age} /> }></Route> 
            <Route path='/news' element={<News />}></Route>
            <Route path='/feed' element={<Feed />}></Route>
          </Routes>
          <p>Loading....</p>
        </div>
      </BrowserRouter>
    )
  }
}

