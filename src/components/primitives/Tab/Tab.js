import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import {
  StyledContainer, PanesContainer, PanelsItem, PanelContainer
} from './styled'


const Tab = ({
  panes, activeIndex, rightContent, ...rest
}) => {
  const [currentIndex, setCurrentIndex] = useState(activeIndex)


  const handleItemClick = index => {
    setCurrentIndex(index)
  }

  const renderMenu = () => (
    <PanelContainer {...rest}>
      <PanesContainer>
        {panes.map((item, index) => (
          <PanelsItem
            key={item.title}
            onClick={() => handleItemClick(index)}
            active={currentIndex === index}
            {...rest}
          >
            {item.title}
          </PanelsItem>
        ))}
      </PanesContainer>
      <div style={{
        fontSize: '0.875rem', color: '#fff', display: 'flex', alignItems: 'center'
      }}
      >
        {rightContent}
      </div>
    </PanelContainer>
  )

  const renderPanes = () => (
    <>
      {panes.map((item, index) => {
        if (currentIndex === index) {
          return (
            <div key={item.title} style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
              {item.render()}
            </div>
          )
        }
        return null
      })}
    </>
  )


  useEffect(
    () => {
      setCurrentIndex(activeIndex)
    },
    [activeIndex]
  )

  return (
    <StyledContainer {...rest}>
  <>
    {renderMenu()}
    {renderPanes()}
  </>
    </StyledContainer>
  )
}

Tab.propTypes = {
  panes: PropTypes.array,
  activeIndex: PropTypes.number
}

Tab.defaultProps = {
  panes: [],
  activeIndex: 0
}

export default withTheme(Tab)
