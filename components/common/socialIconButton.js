import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    color: '#fff',
    '&:hover': {
      color: '#de137a'
    }
  },
  input: {
    display: 'none'
  }
})

function SocialIconButton (props) {
  const { classes } = props
  return (
    <div>
      <a href={props.link} target='_blank'>
        <span className={classes.button}>

          <i className={props.icon} />
        </span>
      </a>

    </div>
  )
}

SocialIconButton.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SocialIconButton)
