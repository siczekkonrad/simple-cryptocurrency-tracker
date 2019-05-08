import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
    display : flex
    flex-direction: row
    margin-left : 5%
    margin-right: 5%

    @media (max-width: 800px) {
        margin-left: 10%
        margin-right: 10%
        font-size: 0.8em
    }
`

const CoinListRow = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

CoinListRow.propTypes = {
  children: PropTypes.node.isRequired
}

export default CoinListRow
