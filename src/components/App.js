import React, { Component } from 'react'
import Dadata from 'dadata-suggestions'
import Suggestions from './Suggestions'
import 'bootstrap/dist/css/bootstrap.css'

const API_KEY = 'fcb3067fea67f8fe83639718a091e5a363ca0d65';
const dadata = new Dadata(API_KEY);


class App extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    dadata.fio({ query: this.state.query, count: 5 })
      .then((data) => {
        this.setState({
          results: data
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
    
    this.getInfo();
  }

  render() {
    return (
      <form>
        <h1 style={{'textAlign': 'center', 'color': 'cadetblue'}}>Форма поиска</h1>
        <input className="form-control form-control-lg mx-auto" style = {{'width': '50%'}}
          placeholder="Введите имя, фамилию или отчество..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions 
          results={this.state.results} 
          queryLenght={this.state.query.length}
        />
      </form>
    )
  }
}

export default App

