import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import { StyledContainer } from './styled'


const Tab = ({ theme, panes, activeIndex, onTabClick, fluidMenu, ...rest }) => {
  const [currentIndex, setCurrentIndex] = useState(activeIndex)

  const fluidMenuStyle = {
    borderBottom: `1px solid #6D728E`,
    margin: 0,
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between'
  }

  const handleItemClick = index => {
    setCurrentIndex(index)
    if (onTabClick) onTabClick(index)
  }

  const renderMenu = () => (
    <div  style={fluidMenu ? fluidMenuStyle : { borderBottom: `1px solid #6D728E` }}>
      {panes.map((item, index) => (
        <div
          key={item.title}
          onClick={() => handleItemClick(index)}
          active={currentIndex === index}
          style={{
            padding: '1em 1.8em',
            margin: 0,
            marginBottom: -1,
            borderBottom: currentIndex === index ? `1px solid #6D728E` : 0
          }}
        >
          {item.title}
        </div>
      ))}
    </div>
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

  return <StyledContainer {...rest}>
  <>
    {renderMenu()}
    {renderPanes()}
  </>
  </StyledContainer>
}

Tab.propTypes = {
  panes: PropTypes.array,
  activeIndex: PropTypes.number,
  onlyMenu: PropTypes.bool,
  onlyPanes: PropTypes.bool,
  onTabClick: PropTypes.func,
  onUpdate: PropTypes.func,
  fluidMenu: PropTypes.bool
}

Tab.defaultProps = {
  panes: [],
  activeIndex: 0,
  onlyMenu: false,
  onlyPanes: false,
  onTabClick: null,
  onUpdate: () => {},
  fluidMenu: false
}

export default withTheme(Tab)
