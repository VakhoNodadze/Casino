import React from 'react'
import PersonIndicator from '../primitives/PersonIndicator'
import {
  StyledContainer, StyledNumberIndicator, StyledNumberIndicatorContainer, StyledNumberIndicatorBorder, StyledPrizeContainer, StyledPriceIndicator
} from './styled'
import Button from '../primitives/Button'

const RegistryCard = () => (
  <StyledContainer>
    <StyledNumberIndicatorContainer>
      <StyledNumberIndicator>
            5 კაციანი
      </StyledNumberIndicator>
      <StyledNumberIndicatorBorder />
    </StyledNumberIndicatorContainer>
    <StyledPrizeContainer>
      <p style={{ fontSize: 60, margin: 0 }}>5000<span style={{ fontSize: 20 }}>GEL</span></p>
      <p>მაქს. მოგება</p>
    </StyledPrizeContainer>
    <PersonIndicator />
    <StyledPriceIndicator>
        5 ლარი
    </StyledPriceIndicator>
    <Button fluid>რეგისტრაცია</Button>
  </StyledContainer>
)

export default RegistryCard
