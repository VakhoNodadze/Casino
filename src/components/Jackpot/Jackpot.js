import React from 'react'
import StyledContainer from './styled'

let NUMBERSARRAY = []
let SINGLESARRAY = []
const Jackpot = ({ number }) => {
  const numberToSingleDigitString = () => {
    NUMBERSARRAY = number.toString().split('')
    const dot = NUMBERSARRAY.findIndex(num => num === '.')
    if (dot > 0)SINGLESARRAY = NUMBERSARRAY.splice(dot, NUMBERSARRAY.length - 1)
    SINGLESARRAY.shift()
  }
  numberToSingleDigitString()
  return (
      <>
        {
          NUMBERSARRAY.map(num => (
            <StyledContainer key={num + Math.random()}>
              {num}
            </StyledContainer>))
        }
        { SINGLESARRAY.length > 0
          ? (
            <div style={{
              width: 4, height: 4, background: '#505081', alignSelf: 'flex-end'
            }}
            />
          ) : null}
        {
          SINGLESARRAY.map(num => (
            <StyledContainer singles key={num + Math.random()}>
              {num}
            </StyledContainer>))
        }
        </>
  )
}

export default Jackpot
