import React from 'react'
import PropTypes from 'prop-types'
import { StyledHeaderWrapper, StyledHeaderHeading } from './Header.styles'

const Header = ({ cap }) => (
  <StyledHeaderWrapper>
    <StyledHeaderHeading>
      Crypto Tracker
    </StyledHeaderHeading>
    <p>
      Current market cap:
      {cap} mld
    </p>
  </StyledHeaderWrapper>
)

Header.propTypes = {
  cap: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}
export default Header
