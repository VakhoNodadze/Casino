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
          `
      default:
        return css`
            background-color: ${props.theme.palette[props.color][200]};
            color: ${props.theme.palette[props.color][1000]};
            padding: 1.4rem 0;
          `
    }
  }};
`

export default StyledContainer
