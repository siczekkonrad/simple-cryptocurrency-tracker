import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header.component'
import CoinList from './components/CoinList/CoinList.component'
import SearchBar from './components/SearchBar/SearchBar.component'
import debounce from 'lodash.debounce'


class App extends Component {
  state = {
    cryptos: null,
    marketCap : 2134234234234,
    searchQuery : '',
    matchedCryptos: [],
  }

  componentDidMount = () => {
    fetch('https://api.coingecko.com/api/v3/coins/')
      .then(response => response.json())
      .then(json => {
        this.setState({
          cryptos: [...json]
        })
      })
  }
  
  
  setMatchedCryptos = debounce(() => {
    const cryptos = [...this.state.cryptos];

    function isMatched(phrase) {
      const regex = new RegExp(`\\b${phrase}.*\\b`, 'i');
      return function(crypto) {
        return Object.values(crypto).some(val => regex.test(val))
      };
    }

    const isMatchedWithSearchQuery = isMatched(this.state.searchQuery)
    const matchedCryptos = cryptos.filter(isMatchedWithSearchQuery)
    this.setState( prevState => ({matchedCryptos}))
  }, 250)

  searchChangeHandler = e => {
    this.setState({ searchQuery: e.target.value }, this.setMatchedCryptos)
  }

  render() {
    const { cryptos, marketCap, searchQuery } = this.state
    return (
        <div className='App'>
          <Header cap={marketCap} />
          <SearchBar 
            handleChange={this.searchChangeHandler} 
            searchQuery={this.state.searchQuery}/>
            <CoinList 
              cryptos={searchQuery === '' ? cryptos : this.state.matchedCryptos }/>
        </div>
      )
  }
 
}

export default App
