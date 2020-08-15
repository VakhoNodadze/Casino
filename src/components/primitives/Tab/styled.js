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
  height: 4rem;
  background-color: ${props => props.transparent ? 'transparent' : '#3D2F60'};

`
const PanesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: -1rem;
`
const PanelsItem = styled.div`
  margin: 1rem;
  margin-bottom: 0.7rem;
  cursor: pointer;
  color: ${props => props.active && props.color ? props.color : '#fff'}
`
const Border = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
  width: calc(100% - 1.5rem);
  margin: auto;
  height: 4px;
  background-color: ${props => props.borderColor || '#6D728E'};
`

export {
  StyledContainer, PanesContainer, PanelsItem, PanelContainer, Border
}
