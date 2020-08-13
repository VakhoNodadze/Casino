import React from 'react'
import {
  StyledContainer, StyledDate, StyledPrize, StyledNames, StyledSubPrize
} from './styled'
import { Time, Person } from '../primitives/Icon'

const TopSpinItem = () => (
  <StyledContainer>
    <StyledDate>
      <Time /> 23.04.19 <span>20:33</span>
    </StyledDate>
    <StyledPrize>
        5000<span style={{ fontSize: '0.75rem', color: '#39B7FF' }}>GEL</span>
    </StyledPrize>
    <StyledNames>
      <Person full />
        ნოდარა, ელდარა, ემზარა
    </StyledNames>
    <StyledSubPrize>
        1000 X 2
    </StyledSubPrize>
  </StyledContainer>
)

export default TopSpinItem
