import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ cap }) => (
  <div>
    Current market cap:
    {cap} mld
  </div>
)

Header.propTypes = {
  cap: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}
export default Header
