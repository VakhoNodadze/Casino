import React from 'react'
import Modal from '../primitives/Modal'
import {
  StyledContainer, StyledHeader, StyledSubHeaderContainer, StyledSubheader, StyledInformationContainer, StyledInformation
} from './styled'
import { Person } from '../primitives/Icon'

const HEADERARRAY = [
  'Date', 'Price', 'Cost', 'Quantity', 'Players', 'Place', 'Won'
]
const CONTENTARRAY = [
  {
    logo: null,
    content: '23 Jan'
  },
  {
    logo: null,
    content: '2 USD'
  },
  {
    logo: null,
    content: '100X'
  },
  {
    logo: null,
    content: '5 Places'
  },
  {
    logo: <Person full />,
    content: 'Mike, George, Hanah, Qeti, Mariam'
  },
  {
    logo: null,
    content: '10'
  },
  {
    logo: null,
    content: '5000 USD'
  }
]

const HistoryModal = ({ ...rest }) => (
  <Modal {...rest} size="large" background="#35364A">
    <StyledContainer>
      <StyledHeader>History</StyledHeader>
      <StyledSubHeaderContainer>
        {HEADERARRAY.map((item, index) => <StyledSubheader key={index}>{item}</StyledSubheader>)}
      </StyledSubHeaderContainer>
      {[...Array(9)].map((_, index) => (
        <StyledInformationContainer key={index}>
          {CONTENTARRAY.map((item, index) => <StyledInformation key={index}>{item.logo} <span style={{ textAlign: 'left' }}>{item.content}</span></StyledInformation>)}
        </StyledInformationContainer>
      ))}
    </StyledContainer>
  </Modal>
)

export default HistoryModal
