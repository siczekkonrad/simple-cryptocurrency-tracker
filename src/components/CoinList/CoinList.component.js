import React from 'react'
import Coin from '../Coin/Coin.component'

const CoinList = ({ cryptos }) => {
  return cryptos.map(crypto => <Coin key={crypto.name} {...crypto} />)
}

export default CoinList
