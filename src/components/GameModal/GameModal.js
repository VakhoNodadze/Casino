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
    textOne: 'Time',
    textTwo: '2 hours'
  },
  {
    textOne: 'Coin Quantity',
    textTwo: '2'
  },
  {
    textOne: 'Minimal Bid',
    textTwo: '22 USD'
  },
  {
    textOne: 'Maximum Bid',
    textTwo: '78 USD'
  }
]
const PLACES = [
  '5000 USD', '3000 USD', '1000 USD'
]
const GameModal = ({ isOpen, onClose, onStart }) => (
  <Modal isOpen={isOpen} onClose={onClose} size="medium" background="#352D4B">
    <StyledContainer>
      <StyledLeftContainer>
        <Header>GAME STARTED</Header>
        {INFORMATION.map((info, index) => (
          <InformationContainer key={index}>
            <TextOne>{info.textOne}</TextOne>
            <TextTwo>{info.textTwo}</TextTwo>
          </InformationContainer>
        ))}
        <RameText>Lorem ipsum dolor sit</RameText>
      </StyledLeftContainer>
      <StyledRightContainer>
        <div style={{
          width: '70%', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}
        >
          <PartialBorder text="JAMING JARS" background="#35364A" width="90%" textWidth="80%">
            <img src={XMas} alt="xmas" style={{ maxWidth: '100%' }} />
          </PartialBorder>
          <Prize>5000<span style={{ fontSize: '0.9rem' }}>USD</span></Prize>
          {PLACES.map((place, index) => (
            <Place key={index}>
              <Person full margin="0 0.6rem 0 0" />
              <p style={{ color: '#fff', margin: '0 3.5rem 0 0' }}>{index + 1} Place</p>
              <p style={{ margin: 0 }}>{place}</p>
            </Place>
          ))}
        </div>
        <div
          style={{
            width: '100%', display: 'flex', justifyContent: 'flex-end', marginTop: '3.7rem'
          }}
        >
          <Button variant="start" active color="greenBtn" type="button" onClick={onStart} button>Begin</Button>
        </div>
      </StyledRightContainer>
    </StyledContainer>
  </Modal>
)

export default GameModal
