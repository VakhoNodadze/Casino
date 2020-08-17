import styled, { css } from 'styled-components'

const StyledContainer = styled.div`
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
    animation: all .5s ease-out .75s;
    animation-fill-mode: backwards;
    ${props => {
    switch (props.variant) {
      case 'close':
        return css`
            background-color: ${props.theme.palette[props.color][200]};
            color: ${props.theme.palette[props.color][1000]};
            width: 8.4rem;
          `
      case 'start':
        return css`
            background-color: ${props.active
    ? props.theme.palette[props.color][200]
    : props.theme.palette[props.color][300]};
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
    ${props => props.button
    && css`
    &:hover {
      transform: translateY(-3px);
      transition-duration: .3s;
      box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
        &::after {
          transform: scaleX(1.4) scaleY(1.6);
          opacity: 0;
      }
    }
    &:active,
    &:focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.2);
    }
    `}
`

export default StyledContainer
