import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Toolbar from '@material-ui/core/Toolbar'

import Buttons from './common/Buttons'

const styles = {
  root: {
    flexGrow: 1,
    textAlign: 'center'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

function NavBar (props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <div
        position='static'
        style={{ backgroundColor: 'transparent', color: 'black' }}
      >
        <Toolbar
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Buttons text='Inicio' />
          <Buttons text='Nosotros' />
          <Buttons text='Catalogo' />
          <Buttons text='Contacto' />
          <Buttons
            text='Comprar'
            variant='contained'
            backgroundColor='#de137a'
            color='#fff'
          />

        </Toolbar>
      </div>
    </div>
  )
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NavBar)
