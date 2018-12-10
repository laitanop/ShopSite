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
    { id: 1, name: 'Home', link: '/', hovercolor: '#de137a' },
    { id: 2, name: 'Nosotros', link: 'nosotros', hovercolor: '#de137a' },
    // { id: 3, name: 'Catalogo', link: 'catalogo', hoverColor: '#de137a' },
    { id: 4, name: 'contacto', link: 'contacto', hovercolor: '#de137a' },
    {
      id: 5,
      name: 'Catalogo',
      link: ' catalogo',
      variant: 'contained',
      backgroundcolor: '#de137a',
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
              key={button.id}
              text={button.name}
              link={button.link}
              hovercolor={button.hovercolor}
              hoverbackgroundcolor={button.hoverbackgroundcolor}
              variant={button.variant}
              color={button.color}
              backgroundcolor={button.backgroundcolor}
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
