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
    backgroundImage: 'url(/static/background-flowers.svg)',
    paddingBottom: '200px',
    textAlign: 'center',
    color: '#de137a'
  }
})

function GroupFoto (props) {
  const { classes } = props

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <div style={{ fontSize: '45px', padding: '70px' }}>
          "Nunca salgas sin tus perlas"
        </div>
        <img
          src='/static/foto-perlas.jpg'
          alt='Smiley face'
          height='700'
          width='900'
        />
      </Paper>
    </div>
  )
}

GroupFoto.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(GroupFoto)
