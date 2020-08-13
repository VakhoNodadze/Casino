import styled from 'styled-components'

const StyledOverlay = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
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
const StyledContainer = styled.div`
  position: absolute;
  top: ${props => (props.scrolling ? '8%' : 'unset')};
  margin-bottom: ${props => (props.scrolling ? '8%' : 'unset')};
  min-height: 200px;
  min-width: 240px;
  max-height: ${props => (props.scrolling ? 'unset' : '90vh')};
  max-width: 96%;
  width: ${props => {
    switch (props.size) {
      case 'large':
        return '964px'
      case 'medium':
        return '815px'
      case 'small':
        return '450px'
      default:
        return '600px'
    }
  }};
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

  .content {
    max-height: ${props => (props.scrolling ? 'unset' : '80vh')};
  }
`


const StyledClose = styled.div`
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  border-radius: 10rem;
  cursor: pointer;
  display: flex;
  height: 2rem;
  width: 2rem;
  justify-content: center;
  align-items: center;
`

export {
  StyledOverlay, StyledContainer, StyledClose
}
