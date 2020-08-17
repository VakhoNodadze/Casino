import styled from 'styled-components'

import { respondTo } from '../../../styled/responsive'


const StyledContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex-grow: 1;
  width: calc(100% + 10px);
  margin: 0 -5px;
  & > .item {
    padding: 5px;
  }
  @media (max-width: 576px){
    width: calc(100% + 10px);
  }
`

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  margin: 0;
  ${props => props.xs
    && respondTo.xs`
    width: ${Math.round((props.xs / 12) * 10e7) / 10e5}%;
  `}

  ${props => props.sm
    && respondTo.sm`
    width: ${Math.round((props.sm / 12) * 10e7) / 10e5}%;
  `}

  ${props => props.md
    && respondTo.md`
    width: ${Math.round((props.md / 12) * 10e7) / 10e5}%;
  `}

  ${props => props.lg
    && respondTo.lg`
    width: ${Math.round((props.lg / 12) * 10e7) / 10e5}%;
  `}

  ${props => props.xl
    && respondTo.xl`
    width: ${Math.round((props.xl / 12) * 10e7) / 10e5}%;
  `}
`

export { StyledContainer, StyledItem }
