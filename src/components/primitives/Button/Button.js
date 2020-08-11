import React from 'react'
import PropTypes from 'prop-types'
import StyledContainer from './styled'

import { variants, colors } from '../../../styled/oneOf'


const Button = ({
  children,
  size,
  color,
  fluid,
  variant,
  active,
  onClick,
  ...rest
}) => (
  <StyledContainer
    variant={variant}
    color={color}
    fluid={fluid}
    active={active}
    onClick={onClick}
    {...rest}
  >
    {children}
  </StyledContainer>
)

Button.propTypes = {
  color: PropTypes.oneOf(colors),
  fluid: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  variant: PropTypes.oneOf(variants)
}

Button.defaultProps = {
  color: 'default',
  fluid: false,
  disabled: false,
  onClick: () => {},
  active: false,
  variant: 'default'
}

export default Button
