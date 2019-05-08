import React from 'react'
import { StyledSearchWrapper, StyledSearchField } from './SearchBar.styles'

const SearchBar = ({ handleChange, searchQuery }) => (
  <StyledSearchWrapper>
    <StyledSearchField value={searchQuery} type='text' onChange={handleChange} placeholder='Search' />
  </StyledSearchWrapper>
)

export default SearchBar
