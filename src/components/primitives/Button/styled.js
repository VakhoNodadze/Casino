import styled, { css } from 'styled-components'

const StyledContainer = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => (props.fluid ? '100%' : 'auto')};
    font-size: 1.3rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    height: 3.875rem;
    ${props => {
    switch (props.variant) {
      case 'close':
        return css`
            background-color: ${props.theme.palette[props.color][200]};
            color: ${props.theme.palette[props.color][1000]};
          `
      case 'start':
        return css`
            background-color: ${props.active
    ? props.theme.palette[props.color][300]
    : props.theme.palette[props.color][200]};
            color: ${props.theme.palette[props.color][1000]};
            width: 8.4rem;
          `
      default:
        return css`
            background-color: ${props.theme.palette[props.color][200]};
            color: ${props.theme.palette[props.color][1000]};
          `
    }
  }};
  ${props => props.circular
    && css`
      border-radius: 1.68rem;
      padding: 0.625rem 1.5rem 0.625rem 0.625rem;
      height: 2.8rem;
      font-size: 0.7rem;
    `};
`

export default StyledContainer
