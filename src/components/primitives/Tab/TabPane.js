import React from 'react'
import PropTypes from 'prop-types'

import { StyledItem } from './styled'

const TabPane = ({ children, ...rest }) => <StyledItem {...rest}>{children}</StyledItem>

TabPane.propTypes = {}

TabPane.defaultProps = {}

export default TabPane
