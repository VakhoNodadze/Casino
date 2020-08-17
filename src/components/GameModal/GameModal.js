import React from 'react'
import Modal from '../primitives/Modal'
import {
  StyledContainer, StyledLeftContainer, Header, InformationContainer, TextOne, TextTwo, RameText, StyledRightContainer, Prize, Place
} from './styled'
import { Person } from '../primitives/Icon'
import XMas from '../../resources/xmas.png'
import Button from '../primitives/Button'
import PartialBorder from '../primitives/PartialBorder'

const INFORMATION = [
  {
    textOne: 'ხანგრძლივობა',
    textTwo: '2 საათი'
  },
  {
    textOne: 'ქოინების რაოდენობა',
    textTwo: '2 ცალი'
  },
  {
    textOne: 'მინიმალური ფსონი',
    textTwo: '22 ლარი'
  },
  {
    textOne: 'მაქსიმალური ფსონი',
    textTwo: '78 ლარი'
  }
]
const PLACES = [
  '5000 GEL', '3000 GEL', '1000 GEL'
]
const GameModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} size="medium" background="#352D4B">
    <StyledContainer>
      <StyledLeftContainer>
        <Header>თამაში დაიწყო</Header>
        {INFORMATION.map((info, index) => (
          <InformationContainer key={index}>
            <TextOne>{info.textOne}</TextOne>
            <TextTwo>{info.textTwo}</TextTwo>
          </InformationContainer>
        ))}
        <RameText>აგერ იყოს რამე ტექსტიო ეწერა დიზაინში ხოდა აჰა იყოს</RameText>
      </StyledLeftContainer>
      <StyledRightContainer>
        <div style={{
          width: '70%', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}
        >
          <PartialBorder text="JAMING JARS" background="#35364A" width="90%" textWidth="80%">
            <img src={XMas} alt="xmas" style={{ maxWidth: '100%' }} />
          </PartialBorder>
          <Prize>5000<span style={{ fontSize: '0.9rem' }}>GEL</span></Prize>
          {PLACES.map((place, index) => (
            <Place key={index}>
              <Person full margin="0 0.6rem 0 0" />
              <p style={{ color: '#fff', margin: '0 3.5rem 0 0' }}>{index + 1} ადგილი</p>
              <p style={{ margin: 0 }}>{place}</p>
            </Place>
          ))}
        </div>
        <div
          style={{
            width: '100%', display: 'flex', justifyContent: 'flex-end', marginTop: '3.7rem'
          }}
        >
          <Button variant="start" active color="greenBtn" type="button" onClick={onClose} button>დაწყება</Button>
        </div>
      </StyledRightContainer>
    </StyledContainer>
  </Modal>
)

export default GameModal
