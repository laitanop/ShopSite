import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    flexGrow: 1,
    backgroundImage: 'url(/static/background-flowers.svg)',
    paddingBottom: '600px'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

function BackFlower (props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      sss
    </div>
  )
}

BackFlower.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BackFlower)
