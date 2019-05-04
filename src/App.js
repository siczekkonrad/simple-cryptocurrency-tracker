import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header.component'
import CoinList from './components/CoinList/CoinList.component';


class App extends Component {
  state = {
    cryptos: [
      { name: "Bitcoin", acronym: "BTC",value: 8714, cap: 147379083734 }, 
      { name: "Etherum", acronym: "ETH",value: 688, cap: 67585640793 },
      { name: "NEO", acronym: "NEO",value: 84, cap: 5515789500  },
      { name: "EOS", acronym: "EOS",value: 5, cap: 4141934598  }
    ],
    marketCap : 2134234234234
};
  render() {
    const { cryptos, marketCap } = this.state
    return (
        <div className='App'>
          <Header cap={marketCap}/>
          <CoinList cryptos={cryptos} />
        </div>
      )
  }
 
}

export default App
