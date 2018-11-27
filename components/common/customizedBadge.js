import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  badge: {
    top: 1,
    right: -10,
    // The border color match the background color.
    border: `1px solid ${theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]}`
  }
})

function CustomizedBadge (props) {
  const { classes } = props

  return (
    <IconButton aria-label='Cart'>
      <Badge
        badgeContent={4}
        color='primary'
        classes={{ badge: classes.badge }}
      >

        <img src='/static/cart.svg' alt='Smiley face' height='32' width='32' />
      </Badge>
    </IconButton>
  )
}

CustomizedBadge.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CustomizedBadge)
