import React from 'react'
import Coin from './Coin/Coin.component'
import CoinListHead from './CoinListHead/CoinListHead.component';

const CoinList = ({ cryptos }) => (
  <>
    <CoinListHead />
    { cryptos !== null 
      ? cryptos.map(crypto => <Coin key={crypto.name} {...crypto} />) 
      : ''}
  </>
)

export default CoinList
