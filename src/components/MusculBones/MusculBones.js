import React from 'react'
import { Time, Cherry } from '../primitives/Icon'
import { MainContainer, History, CherryContainer } from './styled'
import Button from '../primitives/Button'

const MusculBones = () => (
  <MainContainer>
    <History>
      <Time /> ისტორია
    </History>
    <CherryContainer>
      <Cherry yellow />
    </CherryContainer>
    <Button></Button>
  </MainContainer>
)

export default MusculBones
