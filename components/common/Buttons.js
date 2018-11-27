import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

function Buttons (props) {
  const { classes, text, variant, style } = props
  return (
    <div>
      <Button className={classes.button} variant={variant} style={style}>
        {text}
      </Button>

    </div>
  )
}

Buttons.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Buttons)
