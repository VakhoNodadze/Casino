import React from 'react'
import PersonIndicator from '../primitives/PersonIndicator'
import { Person } from '../primitives/Icon'
import {
  StyledContainer, StyledNumberIndicator, StyledNumberIndicatorContainer, StyledPrizeContainer, StyledPrizeSubTxt, StyledPrizeMainTxt
} from './styled'
import Button from '../primitives/Button'
import Cost from '../primitives/Cost'

const RegistryCardItem = ({
  total, full, onRegister, setRoomSize
}) => {
  const handleClick = () => {
    onRegister()
    setRoomSize(total)
  }
  return (
    <StyledContainer>
      <StyledNumberIndicatorContainer>
        <StyledNumberIndicator>
          <Person full />  {total} კაციანი
        </StyledNumberIndicator>
      </StyledNumberIndicatorContainer>
      <StyledPrizeContainer>
        <StyledPrizeMainTxt>5000<span style={{ fontSize: '1.25rem' }}>GEL</span></StyledPrizeMainTxt>
        <StyledPrizeSubTxt>მაქს. მოგება</StyledPrizeSubTxt>
      </StyledPrizeContainer>
      <PersonIndicator total={total} full={full} />
      <Cost cost={total} />
      <Button fluid button onClick={handleClick}>რეგისტრაცია</Button>
    </StyledContainer>
  )
}

export default RegistryCardItem
