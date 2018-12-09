import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  && {
    text-transform: capitalize;
    background-color: ${props => props.backgroundColor};
    border-radius: 3px;
    border: 0;
    color: ${props => props.color};
    /* height: 8px;
    padding: 0 30px; */
  }
  &&:hover {
    background-color: ${props => props.hoverBackgroundColor};
    color: ${props => props.hoverColor};
  }
`

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

function Buttons (props) {
  const {
    text,
    variant,
    backgroundColor,
    color,
    link,
    size,
    hoverColor,
    hoverBackgroundColor
  } = props
  return (
    <div>
      <StyledButton
        size={size}
        href={link}
        variant={variant}
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
        hoverColor={hoverColor}
        color={color}
      >
        {text}
      </StyledButton>
    </div>
  )
}

Buttons.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Buttons)
