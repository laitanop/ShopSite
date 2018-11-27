import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import GridFotos from './gridFotos'

const styles = {
  root: {
    backgroundColor: '#F5F6F7',
    // paddingBottom: '300px',
    marginTop: '50px'
  }
}

function SeccionBanner (props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <div
        style={{
          textAlign: 'center',
          color: '#de137a',
          fontSize: '35px'
        }}
      >
        Creamos el detalle perfecto para hacerte sentir…
      </div>
      <div
        style={{
          textAlign: 'center',
          color: '#8f4d99',
          fontSize: '40px',
          marginLeft: '435px'
        }}
      >
        Hermosa
      </div>
      <GridFotos />

      <div
        style={{
          textAlign: 'center',
          color: 'black',
          fontSize: '35px',
          marginTop: '100px'
        }}
      >
        <img
          src='/static/pinkflower.svg'
          alt='foto bisuteria'
          height='72'
          width='72'
        />
        No tengas miedo a brillar...
      </div>
      <div
        style={{
          textAlign: 'center',
          color: 'black',
          fontSize: '40px',
          marginLeft: '435px',
          paddingBottom: '30px'
        }}
      >
        un poco mas
        <img
          src='/static/purpleflower.svg'
          alt='foto bisuteria'
          height='72'
          width='72'
        />
      </div>
    </div>
  )
}

SeccionBanner.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SeccionBanner)
