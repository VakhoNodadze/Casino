import React from 'react'
import Modal from '../primitives/Modal'

const HistoryModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} size="large" background="red">
    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
      <div style={{ width: '50%', background: 'purple' }}>
        <h1>dark side</h1>
      </div>
      <div style={{ width: '50%', background: 'blue' }}>
        <h1>light side</h1>
      </div
    >
    </div>
  </Modal>
)

export default HistoryModal
