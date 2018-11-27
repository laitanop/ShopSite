import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Logo from '../Logo'
import Buttons from '../common/Buttons'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: '#fabe2c'
  }
})

function MainFooter (props) {
  const { classes } = props

  return (
    <div>
      <Paper className={classes.root} />

      <Grid container spacing={24} style={{ backgroundColor: '#fff' }}>

        <Grid item xs={4}>
          <Logo />
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={24}>

            <Grid item xs={4}>
              <Buttons text='Inicio' />

            </Grid>
            <Grid item xs={4}>
              <Buttons text='Nosotros' />
            </Grid>
            <Grid item xs={4}>
              <Buttons text='Catalogo' />
            </Grid>
            <Grid item xs={4}>
              <Buttons text='Contacto' />
            </Grid>
          </Grid>

        </Grid>
        <Grid item xs={4}>
          social
        </Grid>

      </Grid>

      <Paper className={classes.root} elevation={1}>
        <div style={{ color: '#de137a', textAlign: 'center' }}>
          Copyright ©  2018 Laura ´s place, Honduras
        </div>
        <div style={{ color: '#de137a', textAlign: 'center' }}>
          Powered by: Pamela Rivera
        </div>
        <div />
      </Paper>
    </div>
  )
}

MainFooter.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MainFooter)
