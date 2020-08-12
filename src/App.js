import React, { useState } from 'react'
import styled, { withTheme } from 'styled-components'
import HistoryModal from './components/HistoryModal'
import Button from './components/primitives/Button'
import RegistryCard from './components/RegistryCard'
import Grid from './components/primitives/Grid'
import {
  Cherry, CashierIcon, Settings, Person
} from './components/primitives/Icon'
import Jackpot from './components/Jackpot'
import MusculBones from './components/MusculBones'

const App = ({ theme }) => {
  const [historyModalShow, setHistoryModalShow] = useState(false)

  const renderHistoryModal = () => (
    <HistoryModal isOpen={() => setHistoryModalShow(true)} onClose={() => setHistoryModalShow(false)} />
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
  const renderTab = () => (
    <TabMenu>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ color: '#FFFF00', fontSize: '0.9rem', margin: '0 1.2rem 0 0' }}>ALL GAMES</p>
        <p style={{ color: '#ffff', fontSize: '0.9rem', margin: '0 1.2rem' }}>Only 3 PLAYER</p>
        <p style={{ color: '#ffff', fontSize: '0.9rem', margin: '0 1.2rem' }}>ONLY 5 PLAYER</p>
      </div>
      <div style={{
        fontSize: '0.875rem', color: '#fff', display: 'flex', alignItems: 'center'
      }}
      >
        <Person full />
        Online Players: 4364
      </div>
    </TabMenu>
  )
  const renderCards = () => (
    <Grid style={{ marginTop: 10 }}>
      {[...Array(8)].map((_, index) => (
        <Grid.Item key={index} xs={12} sm={6} lg={4} xl={3}>
          <RegistryCard total={Math.floor(Math.random() * 3) + 3} full={Math.floor(Math.random() * 5) + 0} />
        </Grid.Item>
      ))}
    </Grid>
  )

  return (
    <Container color={theme.color.mainBlack}>
      <div style={{ width: '80%', margin: 'auto', padding: '2rem 0' }}>
        {renderHeader()}
        <div style={{ display: 'flex', marginTop: '1.5rem' }}>
          <LeftContainer>
            {renderTab()}
            {renderCards()}
          </LeftContainer>
          <RightContainer>
            <MusculBones />
          </RightContainer>
        </div>
      </div>
      {historyModalShow && renderHistoryModal()}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.color};
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;

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
const TabMenu = styled.section`
  display: flex;
  padding: 0 1.35rem;
  justify-content: space-between;
  background-color: #3D2F60;
  border-radius: 5px;
  height: 3.75rem;
  width: calc(100% - 10px);
  @media (max-width: 576px){
    flex-direction: column;
    height: 4.25rem;
    justify-content: center;
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
`
export default withTheme(App)
