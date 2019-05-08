import React from 'react'
import PropTypes from 'prop-types'
import CoinListRow from '../CoinListRow/CoinListRow.component'
import CoinListCell from '../CoinListCell/CoinListCell.component'

const Coin = ({image, name, symbol, market_data}) => (
  <CoinListRow key={name}>
    <CoinListCell>
      <img src={image.small} alt={name} />
      <h2>{name}</h2>
    </CoinListCell>
    <CoinListCell>
      {String(market_data.current_price.usd)
         .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
         .trim()} USD
    </CoinListCell>
    <CoinListCell>
      {String(market_data.price_change_percentage_24h)
         .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
         .trim()} %
    </CoinListCell>
    <CoinListCell>
      {String(market_data.market_cap.btc)
         .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
         .trim()}
    </CoinListCell>
    <CoinListCell>
      {String(market_data.circulating_supply)
         .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
         .trim()}
    </CoinListCell>
  </CoinListRow>
)

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cap: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}
export default Coin
