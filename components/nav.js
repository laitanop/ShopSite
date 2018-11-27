import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import SocialIconButton from './common/socialIconButton'

import ShopCart from './common/shopCart'

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

function Nav (props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position='static' style={{ backgroundColor: '#fabe2c' }}>
        <Toolbar>
          <Typography variant='h6' color='inherit' className={classes.grow} />
          <SocialIconButton
            link='https://www.facebook.com/laurasplaceins/'
            icon='fab fa-facebook-square fa-2x'
            hover='red'
            style={{
              color: '#fff',
              'i:hover': {
                color: '#de137a'
              }
            }}
          />&nbsp; &nbsp;
          <SocialIconButton
            link='https://www.instagram.com/laurasplaceins/?hl=en'
            icon='fab fa-instagram fa-2x'
            style={{
              color: '#fff',
              'a:hover': {
                color: '#de137a'
              }
            }}
          />&nbsp; &nbsp;

          <ShopCart />

        </Toolbar>
      </AppBar>
    </div>
  )
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Nav)
