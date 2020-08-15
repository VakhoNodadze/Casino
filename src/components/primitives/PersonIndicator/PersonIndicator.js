import React from 'react'
import PropTypes from 'prop-types'
import { Person } from '../Icon'
import StyledContainer from './styled'

const PersonIndicator = ({ total, full, ...rest }) => (
  <StyledContainer>
    {[...Array(total)].map((_, index) => (<Person key={index} full={full--} {...rest} />))}
  </StyledContainer>
)

PersonIndicator.propTypes = {
  total: PropTypes.number,
  full: PropTypes.number
}

PersonIndicator.defaultProps = {
  total: 5,
  full: 2
}
export default PersonIndicator
