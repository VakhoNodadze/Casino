import React, { useState } from 'react'
import styled, { withTheme } from 'styled-components'
import { Cherry, Person, Prize } from '../components/primitives/Icon'
import Modal from '../components/primitives/Modal'
import Button from '../components/primitives/Button'

const LEADERBOARD = [
  {
    name: 'Mako',
    score: 99999,
    coins: 3642,
    winner: false
  },
  {
    name: 'Vakhtang',
    score: 6421,
    coins: 2353,
    winner: false
  },
  {
    name: 'Mike',
    score: 4423,
    coins: 1992,
    winner: false
  },
  {
    name: 'Shako',
    score: 232,
    coins: 921,
    winner: true
  },
  {
    name: 'George',
    score: -2123,
    coins: -5210,
    winner: false
  }
]

const GameWin = ({ theme }) => {
  const [modalShow, setModalShow] = useState(true)

  const handleModalClose = () => {
    setModalShow(false)
  }

  const renderModal = () => (
    <Modal hasCloseIcon={false} background="#241E36" size="small" isOpen={modalShow}>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4.3rem 1rem 1rem 1rem'
      }}
      >
        <Prize />
        <p style={{ fontSize: '1.3rem', color: '#fff', margin: 0 }}>Congratulations!</p>
        <p style={{ margin: '0.5rem 0', color: '#fff', fontSize: '0.8rem' }}>
                You got first place
        </p>
        <div style={{
          backgroundColor: '#201A31', borderRadius: '2.5rem', width: '70%', margin: '0.5rem auto 2rem auto', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem 0'
        }}
        >
          <p style={{
            color: '#ffff00', margin: '0.5rem 0 0 0', fontSize: '2.5rem', fontWeight: 'bold', lineHeight: '1rem'
          }}
          >5000<span style={{ fontSize: '0.8rem' }}>USD</span>
          </p>
          <span style={{ color: '#fff', fontSize: '0.8rem' }}>
              Prize
          </span>
        </div>
        <Button variant="close" color="close" style={{ alignSelf: 'flex-end' }} onClick={() => handleModalClose()}>Close</Button>
      </div>
    </Modal>
  )

  return (
    <Container color={theme.color.mainBlack}>
      <SideBarContainer>
        <SideBarMain>
          <Cherry yellow />
          <PrizeQuantity>5000 <span style={{ fontSize: '1.2rem', color: '#fff' }}>USD</span></PrizeQuantity>
          <p style={{ fontSize: '1rem', color: '#fff', margin: 0 }}>PRIZE</p>
        </SideBarMain>
        <p style={{
          color: '#fff', margin: '2rem', display: 'flex', alignItems: 'center'
        }}
        ><Prize /> ლიდერბორდი
        </p>
        {LEADERBOARD.map((item, index) => (
          <LeaderBoardItem key={item.name} winner={item.winner}>
            <div style={{ display: 'flex' }}>
              <LeaderBoardNumber winner={item.winner}>
                {index + 1}
              </LeaderBoardNumber>
              <NameScoreContainer>
                <span style={{ color: '#fff', fontSize: '0.8rem' }}>
                  <Person small margin="0 0.5rem 0 0" />{item.name}
                </span>
                <span style={{ color: item.winner ? '#FFFF00' : '#39B7FF', fontSize: '1.8rem', lineHeight: '1.8rem' }}>{item.score}</span>
              </NameScoreContainer>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ color: '#fff', fontSize: '1.5rem', lineHeight: '1.8rem' }}>{item.coins}</span>
              <span style={{ color: '#fff', fontSize: '0.75rem' }}>COIN</span>
            </div>
          </LeaderBoardItem>
        ))}
      </SideBarContainer>
      {modalShow && renderModal()}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.color};
  height: 100vh;
  display: flex;
`
const SideBarContainer = styled.div`
    display: flex;
    background-color: #241E36;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 450px;
    @media (max-width: 992px){
        width: 300px;
    }
    @media (max-width: 576px){
        width: 200px;
    }
`
const SideBarMain = styled.div`
    width: 80%;
    height: 15rem;
    background-color: #5834AC;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.7rem;
`
const PrizeQuantity = styled.p`
    font-size: 3.8rem;
    color: #fff;
    margin: 0;
`
const LeaderBoardItem = styled.div`
    background-color: ${props => props.winner ? '#5834AC' : '#352D4B'};
    width: 80%;
    padding: 0.5rem 1rem;
    border-radius: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.7rem;
`
const LeaderBoardNumber = styled.span`
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    color: #fff;
    background-color: ${props => props.winner ? '#FFCA2A' : '#3F365A'};
`
const NameScoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1rem;
    justify-content: center;
`
export default withTheme(GameWin)
