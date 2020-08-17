import React from 'react'
import { StyledContainer, BottomBorder } from './styled'

const PartialBorder = ({
  children, text, width, textWidth, ...rest
}) => (
  <StyledContainer width={width}>
    {children}
    <BottomBorder width={textWidth} {...rest}>{text}</BottomBorder>
  </StyledContainer>
)

export default PartialBorder
