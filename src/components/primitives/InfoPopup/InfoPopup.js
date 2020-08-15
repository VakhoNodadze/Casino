import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Grid from '../Grid'


import {
  StyledOverlay, StyledPositionContainer, StyledHoldContainer, StyledContainer
} from './styled'

const InfoPopup = ({
  isOpen,
  children,
  size,
  closeConfirmation,
  Confirmation,
  background
}) => {
  const [fadeType, setFadeType] = useState('out')

  useEffect(
    () => {
      setTimeout(() => {
        if (isOpen) setFadeType('in')
      }, 200)
    },
    [isOpen]
  )

  if (isOpen) {
    return ReactDOM.createPortal(
      <StyledOverlay isOpen={isOpen} fadeType={fadeType}>
        <StyledPositionContainer>
          <StyledHoldContainer>
            <Grid>
              <Grid.Item xs={12} sm={12} lg={8} xl={6}>
                <StyledContainer
                  className="popup"
                  onClick={e => e.stopPropagation()}
                  fadeType={fadeType}
                  size={size}
                  background={background}
                >
                  {children}
                </StyledContainer>
              </Grid.Item>
            </Grid>
          </StyledHoldContainer>
        </StyledPositionContainer>
        {closeConfirmation && Confirmation}
      </StyledOverlay>,
      document.body
    )
  }

  return null
}

InfoPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  size: PropTypes.string,
  closeConfirmation: PropTypes.bool,
  Confirmation: PropTypes.object
}

InfoPopup.defaultProps = {
  isOpen: false,
  size: 'default',
  closeConfirmation: false,
  Confirmation: null
}

export default InfoPopup
