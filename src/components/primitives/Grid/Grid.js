import React from 'react'
import { StyledContainer } from './styled'

import GridItem from './GridItem'


const Grid = ({ children, spacing, ...rest }) => (
  <StyledContainer className="grid"  {...rest}>
    {children}
  </StyledContainer>
)


Grid.Item = GridItem

export default Grid
