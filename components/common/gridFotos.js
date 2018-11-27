import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: '70px'
  },
  paper: {
    height: 340,
    width: 340
  },
  control: {
    padding: theme.spacing.unit * 2
  }
})

class GridFotos extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.demo}
            justify='center'
            spacing={40}
          >
            {this.props.renderImages.map(value => (
              <Grid key={value.id} item>

                <Paper className={classes.paper} elevation={24}>
                  {' '}
                  <img
                    src={`/static/${value.images}`}
                    alt='foto bisuteria'
                    height='332'
                    width='332'
                  />
                </Paper>
                <div
                  style={{
                    marginTop: '30px',
                    fontSize: '35px',
                    textAlign: 'center'
                  }}
                >
                  {value.description}
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>

      </Grid>
    )
  }
}

GridFotos.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(GridFotos)
