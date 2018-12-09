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
  const ButtonName = [
    { id: 1, name: 'Home', link: '/', hoverColor: '#de137a' },
    { id: 2, name: 'Nosotros', link: 'nosotros', hoverColor: '#de137a' },
    { id: 3, name: 'Catalogo', link: 'catalogo', hoverColor: '#de137a' },
    { id: 4, name: 'contacto', link: 'contacto', hoverColor: '#de137a' },
    {
      id: 5,
      name: 'comprar',
      link: ' comprar',
      variant: 'contained',
      backgroundColor: '#de137a',
      color: '#fff'
    }
  ]
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
          {ButtonName.map(button => (
            <Buttons
              id={button.id}
              text={button.name}
              link={button.link}
              hoverColor={button.hoverColor}
              hoverBackgroundColor={button.hoverBackgroundColor}
              variant={button.variant}
              color={button.color}
              backgroundColor={button.backgroundColor}
            />
          ))}
        </Toolbar>
      </div>
    </div>
  )
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NavBar)
