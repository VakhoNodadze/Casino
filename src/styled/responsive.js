import { css } from 'styled-components'

export const sizes = ['xs', 'sm', 'md', 'lg', 'xl']

export const breakpoints = {
  xs: 0,
  sm: 880,
  md: 960,
  lg: 1366,
  xl: 1920
}

export const respondTo = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
