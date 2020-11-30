import React from 'react'
import StyledContainer from './styled'

const Cost = ({ cost, ...rest }) => (
  <StyledContainer {...rest}>
    {cost} USD
  </StyledContainer>
)

export default Cost
