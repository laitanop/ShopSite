import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import CustomizedBadge from './customizedBadge'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    color: '#fff',
    '&:hover': {
      color: '#de137a'
    }
  },
  input: {
    display: 'none'
  }
})

function ShopCart (props) {
  const { classes } = props
  return (
    <div>
      <CustomizedBadge />
      <Button color='inherit'>Mis compras</Button>

    </div>
  )
}

ShopCart.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ShopCart)
