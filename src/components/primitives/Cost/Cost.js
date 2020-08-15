import React from 'react'
import StyledContainer from './styled'

const Cost = ({ cost, ...rest }) => (
  <StyledContainer {...rest}>
    {cost} ლარი
  </StyledContainer>
)

export default Cost
