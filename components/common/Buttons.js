import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  && {
    text-transform: capitalize;
    background-color: ${props => props.backgroundcolor};
    border-radius: 3px;
    border: 0;
    color: ${props => props.color};
    /* height: 8px;
    padding: 0 30px; */
  }
  &&:hover {
    background-color: ${props => props.hoverbackgroundcolor};
    color: ${props => props.hovercolor};
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
    backgroundcolor,
    color,
    link,
    size,
    hovercolor,
    hoverbackgroundcolor,
    click
  } = props
  return (
    <div>
      <StyledButton
        size={size}
        href={link}
        variant={variant}
        backgroundcolor={backgroundcolor}
        hoverbackgroundcolor={hoverbackgroundcolor}
        hovercolor={hovercolor}
        color={color}
        onClick={click}
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
