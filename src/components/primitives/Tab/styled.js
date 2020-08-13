import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const PanelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 1.1rem;
  background: red;
  border-radius: 5px;
  padding: 0 1rem;
  background-color: ${props => props.transparent ? 'transparent' : '#3D2F60'};

`
const PanesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: -1rem;
`
const PanelsItem = styled.div`
  margin: 1rem;
  padding-bottom: 0.7rem;
  border-bottom: ${props => props.active ? '4px solid #6D728E' : 0};
  cursor: pointer;
  color: ${props => props.active && props.yellow ? '#FFFF00' : '#fff'}
`

export {
  StyledContainer, PanesContainer, PanelsItem, PanelContainer
}
