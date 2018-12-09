import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  && {
    background-color: ${props => props.backgroundColor};
    border-radius: 3px;
    border: 0;
    color: ${props => props.color};
    height: 48px;
    padding: 0 30px;
   
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
  const { classes, text, variant, backgroundColor, color } = props
  return (
    <div>
      {/* <Button className={classes.button} variant={variant} style={style}>
        {text}
      </Button> */}

      <StyledButton
        variant={variant}
        backgroundColor={backgroundColor}
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
