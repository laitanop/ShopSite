import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import GridFotos from '../common/gridFotos'

const styles = {
  root: {
    flexGrow: 1,
    backgroundImage: 'url(/static/background-flowers.svg)',
    paddingBottom: '200px'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

function BackFlower (props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <div style={{ paddingTop: '20px' }}>
        <GridFotos
          renderImages={[
            {
              id: 1,
              images: 'gridfoto4.jpg',
              description: '"Mi tierra"'
            },
            {
              id: 2,
              images: 'gridfoto5.jpg',
              description: '"Aretes de flores"'
            },
            {
              id: 3,
              images: 'gridfoto6.jpg',
              description: '"Aretes de fleco"'
            }
          ]}
        />

      </div>

    </div>
  )
}

BackFlower.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BackFlower)
