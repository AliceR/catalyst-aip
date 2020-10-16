import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import theme from '../config/theme'

const HeaderContainer = styled.header`
  padding: ${theme.space[4]}px ${theme.space[3]}px;
`

const Heading = styled.h1`
  color: ${theme.colors.blue};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes[4]}pt;
  font-weight: ${theme.fontWeights.heading};
  margin: 0;
`

const Tagline = styled.label`
  color: ${theme.colors.yellow};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes[0]}pt;
  font-weight: ${theme.fontWeights.bold};
  text-transform: uppercase;
`

export default function Header({ siteName, headline }) {
  return (
    <HeaderContainer>
      <Tagline>{siteName}</Tagline>
      <Heading>
        <span role='img' aria-label='flag-ke'>
          🇰🇪
        </span>{' '}
        {headline}
      </Heading>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteName: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
}
