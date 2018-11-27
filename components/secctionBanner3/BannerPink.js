import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: '#de137a',
    textAlign: 'center',
    color: '#fff'
  }
})

function BannerPink (props) {
  const { classes } = props

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <div style={{ fontSize: '40px' }}>
          "Visita nuestra tienda en mall las cascadas"
        </div>
        <div style={{ fontSize: '25px' }}>
          Segundo piso frente a cinépolis
        </div>
        <img
          src='/static/foto-group1.svg'
          alt='Smiley face'
          height='700'
          width='1400'
        />
      </Paper>
    </div>
  )
}

BannerPink.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BannerPink)
