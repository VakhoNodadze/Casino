import React, { useState } from 'react'
import styled, { withTheme } from 'styled-components'
import Grid from './components/primitives/Grid'
import Tab from './components/primitives/Tab'
import HistoryModal from './components/HistoryModal'
import GameModal from './components/GameModal'
import RegistryCardItem from './components/RegistryCardItem'
import {
  Cherry, CashierIcon, Settings, Person
} from './components/primitives/Icon'
import Jackpot from './components/Jackpot'
import MusculBones from './components/MusculBones'
import TopWinItem from './components/TopWinItem'
import TopSpinItem from './components/TopSpinItem'
import GamePopup from './components/GamePopup'

const TOTALPLAYERS = [3, 5]
const App = ({ theme }) => {
  const [historyModalShow, setHistoryModalShow] = useState(false)
  const [gameModalShow, setGameModalShow] = useState(false)
  const [popupShow, setPopupShow] = useState(false)
  const [roomSize, setRoomSize] = useState(0)

  const handleHistoryModalOpen = () => {
    setHistoryModalShow(true)
  }
  const handleHistoryModalClose = () => {
    setHistoryModalShow(false)
  }
  const handleGameModalOpen = () => {
    setGameModalShow(true)
  }
  const handleGameModalClose = () => {
    setGameModalShow(false)
  }
  const handlePopupOpen = () => {
    setPopupShow(true)
  }
  const handlePopUpClose = () => {
    setTimeout(() => {
      setPopupShow(false)
    }, 1500)
  }

  const renderGameModal = () => (
    <GameModal isOpen={gameModalShow} onClose={() => handleGameModalClose()} />
  )
  const renderHistoryModal = () => (
    <HistoryModal isOpen={historyModalShow} onClose={() => handleHistoryModalClose()} />
  )
  const renderHeader = () => (
    <Header>
      <Cherry yellow />
      <JackpotMainContainer>
        <JackpotSubContainer>
          <div style={{ display: 'flex', height: '2.13rem' }}>
            <Jackpot number={82591.92} />
          </div>
          <LeaderJackpotPar>leader jackpot</LeaderJackpotPar>
        </JackpotSubContainer>
        <JackpotSubContainer>
          <div style={{ display: 'flex', height: '2.13rem' }}>
            <Jackpot number={19952} />
          </div>
          <LeaderJackpotPar>leader jackpot</LeaderJackpotPar>
        </JackpotSubContainer>
      </JackpotMainContainer>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CashierBtn>
          <CashierIcon /> Cashier
        </CashierBtn>
        <Settings />
        <Settings />
        <Settings />
        <Settings />
      </div>
    </Header>
  )
  const renderCards = (total) => (
    <Grid style={{ marginTop: '0.7rem' }}>
      {[...Array(8)].map((_, index) => (
        <Grid.Item key={index} xs={12} sm={6} lg={4} xl={3}>
          <RegistryCardItem setRoomSize={setRoomSize} onRegister={() => handlePopupOpen()} total={total || TOTALPLAYERS[Math.floor(Math.random() * TOTALPLAYERS.length)]} full={Math.floor(Math.random() * 5) + 0} />
        </Grid.Item>
      ))}
    </Grid>
  )
  const renderPopup = () => (
    <GamePopup onFull={() => handlePopUpClose()} isOpen={popupShow} roomSize={roomSize} />
  )
  const playerPanes = [
    {
      title: 'All Games',
      render: () => renderCards()
    },
    {
      title: 'Only 3 Player',
      render: () => renderCards(TOTALPLAYERS[0])
    },
    {
      title: 'Only 5 Player',
      render: () => renderCards(TOTALPLAYERS[1])
    }
  ]
  const renderGames = () => (
    <>
      <Tab
        color="#FFFF00"
        borderColor="#FF00B2"
        panes={playerPanes}
        rightContent={(
          <div style={{
            fontSize: '0.875rem', color: '#fff', display: 'flex', alignItems: 'center'
          }}
          >
            <Person full />
        Online Players: 4364
          </div>
)}
      />
      </>
  )

  const renderTop = () => (
    <TopWinItem />
  )
  const renderLeaderBoard = () => (
    <div style={{
      height: 490, display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}
    >
      <h1 style={{ color: '#fff' }}>This is the Leadeboard Department</h1>
    </div>
  )
  const renderHistory = () => (
    <div style={{
      height: 490, display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}
    >
      <h1 style={{ color: '#fff' }}>This is the History Department</h1>
    </div>
  )
  const renderRules = () => (
    <div style={{
      height: 490, display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}
    >
      <h1 style={{ color: '#fff' }}>This is the Rules department</h1>
    </div>
  )

  const panes = [
    {
      title: 'ტოპ მოგებები',
      render: () => renderTop()
    },
    {
      title: 'ლიდერბორდი',
      render: () => renderLeaderBoard()
    },
    {
      title: 'ისტორია',
      render: () => renderHistory()
    },
    {
      title: 'წესები',
      render: () => renderRules()
    }
  ]
  const renderTopWinsTab = () => (
    <Tab panes={panes} transparent />
  )

  const renderTopSpin = () => (
    <TopSpinContainer>
      <TopSpinHeader onClick={() => handleGameModalOpen()}>ტოპ სპინები</TopSpinHeader>
      {[...Array(5)].map((_, index) => <TopSpinItem key={index} />)}
    </TopSpinContainer>
  )

  return (
    <Container color={theme.color.mainBlack}>
      <div style={{ width: '80%', margin: 'auto' }}>
        {renderHeader()}
        <div style={{ display: 'flex', marginTop: '1.5rem', justifyContent: 'space-between' }}>
          <LeftContainer>
            {renderGames()}
            {renderTopWinsTab()}
          </LeftContainer>
          <RightContainer>
            <MusculBones onClick={handleHistoryModalOpen} />
            {renderTopSpin()}
          </RightContainer>
        </div>
      </div>
      {historyModalShow && renderHistoryModal()}
      {gameModalShow && renderGameModal()}
      {popupShow && renderPopup()}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.color};
  padding: 2rem 0 4rem 0;
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 4rem;

`
const LeaderJackpotPar = styled.p`
  font-size: 1rem;
  color: #98AAC2;
  margin: 3px 0 0 5px;
  text-transform: uppercase;
`
const CashierBtn = styled.button`
  background-color: #FFCA2A;
  width: 7.125rem;
  height: 2.5rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 3.5rem;
`
const LeftContainer = styled.div`
width: calc(80% - 20px);
  @media (max-width: 576px){
  width: calc(100% - 10px);
}
`
const JackpotMainContainer = styled.div`
  display: flex;
  @media (max-width: 768px){
    flex-direction: column;
  }
`
const JackpotSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 2.13rem;
  @media (min-width: 769px){
    margin: 0 2.5rem;
  }
  @media (max-width: 768px){
    margin: 1rem 0;
  }
`
const RightContainer = styled.div`
  width: calc(20% - 5px);
  display: flex;
  flex-direction: column;
  @media (max-width: 768px){
    display: none;
  }
`
const TopSpinContainer = styled.div`
  width: 100%;
  padding: 1rem 0.7rem 0.7rem 0.7rem;
  background-color: #35364A;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.3rem;
  margin-top: 0.7rem;
  height: 100%;
`
const TopSpinHeader = styled.p`
  font-size: 1rem;
  color: #fff;
  padding-bottom: 0.5rem;
  border-bottom: 4px solid #BDC63E;
`
export default withTheme(App)
