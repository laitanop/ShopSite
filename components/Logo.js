import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  }
})

function Logo (props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <img src='/static/logo.svg' alt='Smiley face' height='150' width='150' />
    </div>
  )
}

Logo.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Logo)
