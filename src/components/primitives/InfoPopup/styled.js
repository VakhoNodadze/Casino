import styled from 'styled-components'


const StyledOverlay = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease-in;
  overflow: overlay;
  opacity: ${props => {
    switch (props.fadeType) {
      case 'in':
        return '1'
      default:
        return '0'
    }
  }};
  transition: ${props => {
    switch (props.fadeType) {
      case 'in':
        return 'opacity 0.1s ease-in-out'
      case 'out':
        return 'opacity 0.1s ease-in-out'
      default:
        return ''
    }
  }};
`
const StyledPositionContainer = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
  justify-content: flex-start;
  margin-top 12.2rem;
`
const StyledHoldContainer = styled.div`
  width: calc(80% - 20px);
  height: 100%;
`

const StyledContainer = styled.div`
  height: 21.3125rem;
  padding: 0.7rem 1.2rem;
  width: 100%;
  background-color: ${props => props.background || '#fff'};
  border-radius: 10px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06);
  transform: ${props => {
    switch (props.fadeType) {
      case 'in':
        return 'scale(1)'
      default:
        return 'scale(0.82)'
    }
  }};
  transition: ${props => {
    switch (props.fadeType) {
      case 'in':
        return 'transform 0.1s'
      case 'out':
        return 'transform 0.1s'
      default:
        return ''
    }
  }};
`


export {
  StyledOverlay, StyledPositionContainer, StyledHoldContainer, StyledContainer
}
