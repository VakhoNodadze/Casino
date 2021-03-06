import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import InfoPopup from '../primitives/InfoPopup'
import Cost from '../primitives/Cost'
import PersonIndicator from '../primitives/PersonIndicator'
import Button from '../primitives/Button'


const GamePopup = ({
  isOpen, roomSize, onFull, onClose
}) => {
  const [number, setNumber] = useState(Math.floor(Math.random() * (roomSize - 1) + 1))

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNumber(prevCount => prevCount + 1)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [number])

  useEffect(() => {
    if (number === roomSize) {
      onFull()
    }
  }, [number, onFull, roomSize])

  return (
    <InfoPopup background="#217C8B" isOpen={isOpen}>
      <div style={{ display: 'flex', flexDirection: 'column', color: '#fff' }}>
        <div style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}
        >
          <p style={{
            fontSize: '1rem', margin: 0, paddingBottom: '1rem', borderBottom: '4px solid #95C7EE'
          }}
          >{roomSize} places
          </p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Cost cost={roomSize} style={{ margin: 0 }} />
            <p style={{ margin: '0 0 0 2rem', fontSize: '2.5rem', fontWeight: 'bold' }}>{roomSize}000
              <span style={{ fontSize: '0.9rem', fontWeight: '300' }}>USD</span>
            </p>
          </div>
        </div>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%', margin: '2rem auto 0.5rem auto'
        }}
        >
          <PopupText>Plaase wait for others to join</PopupText>
          <div style={{ width: '100%' }}>
            <PersonIndicator large total={roomSize} full={number} />
          </div>
          <p style={{ fontSize: '0.85rem', margin: '1rem 0' }}>Estimated Waiting Time: 30 sec</p>
          <div className="progress-horizontal">
            <div className="bar-horizontal" />
          </div>
        </div>
        <Button
          variant="start"
          color="greenBtn"
          button
          style={{ alignSelf: 'flex-end', marginTop: '0.5rem' }}
          onClick={onClose}
        >Cancel
        </Button>
      </div>
    </InfoPopup>
  )
}

const PopupText = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0;
  @media (max-width: 776px){
    font-size: 0.8rem;
  }
`

export default GamePopup
