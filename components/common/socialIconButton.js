import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  button: {
    color: '#fff',
    '&:hover': {
      color: '#de137a'
    }
  }
})

function SocialIconButton (props) {
  const { classes, style } = props

  return (
    <div>
      <a href={props.link} target='_blank' style={style}>
        <span>

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
