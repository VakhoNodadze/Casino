import React from 'react'
import {
  Time, Cherry, Coins, Dollar
} from '../primitives/Icon'
import {
  MainContainer, History, CherryContainer, MusculBonesTxt
} from './styled'
import Button from '../primitives/Button'

const MusculBones = ({ onClick }) => (
  <MainContainer>
    <History onClick={() => onClick()}>
      <Time /> ისტორია
    </History>
    <CherryContainer>
      <Cherry yellow />
    </CherryContainer>
    <MusculBonesTxt>Muscul Bones</MusculBonesTxt>
    <Button circular style={{ justifyContent: 'space-between', backgroundColor: '#6E717E' }}>
      <span style={{ display: 'flex', alignItems: 'center' }}><Coins /> Balance</span>
      <span>9965.65USD</span>
    </Button>
    <Button circular style={{ justifyContent: 'space-between', backgroundColor: '#217C8B', marginTop: '0.625rem' }}>
      <span style={{ display: 'flex', alignItems: 'center' }}><Dollar /> Free Spins</span>
      <span>18USD</span>
    </Button>
  </MainContainer>
)

export default MusculBones
