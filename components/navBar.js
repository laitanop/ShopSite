import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

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

          <Button color='inherit'>Inicio</Button>
          <Button color='inherit'>Nosotros</Button>
          <Button color='inherit'>Cataloago</Button>

          <Button color='inherit'>Contacto</Button>
          <Button
            variant='contained'
            style={{ backgroundColor: '#de137a', color: '#fff' }}
          >
            Comprar
          </Button>
        </Toolbar>
      </div>
    </div>
  )
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NavBar)
