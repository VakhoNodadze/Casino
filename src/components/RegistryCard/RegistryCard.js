import React from 'react'
import PersonIndicator from '../primitives/PersonIndicator'
import { Person } from '../primitives/Icon'
import {
  StyledContainer, StyledNumberIndicator, StyledNumberIndicatorContainer, StyledNumberIndicatorBorder, StyledPrizeContainer, StyledPrizeSubTxt, StyledPrizeMainTxt
} from './styled'
import Button from '../primitives/Button'
import CostButton from '../primitives/CostButton'

const RegistryCard = ({ ...rest }) => (
  <StyledContainer>
    <StyledNumberIndicatorContainer>
      <StyledNumberIndicator>
        <Person full />  {rest.total} კაციანი
      </StyledNumberIndicator>
      <StyledNumberIndicatorBorder />
    </StyledNumberIndicatorContainer>
    <StyledPrizeContainer>
      <StyledPrizeMainTxt>5000<span style={{ fontSize: '1.25rem' }}>GEL</span></StyledPrizeMainTxt>
      <StyledPrizeSubTxt>მაქს. მოგება</StyledPrizeSubTxt>
    </StyledPrizeContainer>
    <PersonIndicator {...rest} />
    <CostButton cost={rest.total} />
    <Button fluid>რეგისტრაცია</Button>
  </StyledContainer>
)

export default RegistryCard
