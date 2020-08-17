import React from 'react'
import InfoPopup from '../primitives/InfoPopup'
import Cost from '../primitives/Cost'
import PersonIndicator from '../primitives/PersonIndicator'
import Button from '../primitives/Button'
import XMas from '../../resources/xmas.png'
import PartialBorder from '../primitives/PartialBorder'


const GamePopupStart = ({ isOpen, roomSize, onClick }) => (
  <InfoPopup background="#217C8B" isOpen={isOpen}>
    <div style={{ display: 'flex', flexDirection: 'column', color: '#fff' }}>
      <div style={{
        width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}
      >
        <p style={{
          fontSize: '1rem', margin: 0, paddingBottom: '1rem', borderBottom: '4px solid #95C7EE'
        }}
        >{roomSize} კაციანი
        </p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Cost cost={roomSize} style={{ margin: 0 }} />
          <p style={{ margin: '0 0 0 2rem', fontSize: '2.5rem', fontWeight: 'bold' }}>5000
            <span style={{ fontSize: '0.9rem', fontWeight: '300' }}>GEL</span>
          </p>
        </div>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%', margin: '1rem auto 0.5rem auto'
      }}
      >
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <PartialBorder text="კოეფიციენტი">
            <p style={{
              fontSize: '3.8rem', margin: 0
            }}
            >5X
            </p>
          </PartialBorder>
          <PartialBorder text="JAMING JARS">
            <img src={XMas} alt="JAMING JARS" style={{ maxWidth: '100%' }} />
          </PartialBorder>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <div style={{ width: '70%' }}>
          <PersonIndicator large full={roomSize} total={roomSize} />
        </div>
        <Button
          variant="start"
          active
          button
          color="greenBtn"
          style={{ alignSelf: 'flex-end', marginTop: '0.5rem' }}
          onClick={onClick}
        >დაწყება
        </Button>
      </div>
    </div>
  </InfoPopup>
)


export default GamePopupStart
