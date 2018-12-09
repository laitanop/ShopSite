import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import CatalagoCard from '../common/CatalagoCard'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
})

function Catalago (props) {
  const list = [
    {
      id: 1,
      title: 'collar de perlas',
      subheader: 'subheader',
      text: 'texto',
      price: '320.00',
      img: '/static/c1.jpg'
    },
    {
      id: 2,
      title: 'perlas',
      subheader: 'subheader',
      text: 'texto',
      price: '320.00',
      img: '/static/c2.jpg'
    },
    {
      id: 3,
      title: 'collar ',
      subheader: 'subheader',
      text: 'texto',
      price: '320.00',
      img: '/static/c3.jpg'
    },
    {
      id: 3,
      title: 'collar ',
      subheader: 'subheader',
      text: 'texto',
      price: '320.00',
      img: '/static/c4.jpg'
    }
  ]
  const { classes } = props

  return (
    <div style={{ padding: 50 }}>
      <CatalagoCard
        list={list}
        title='collar de perlas'
        subheader='subheader'
        text='text'
        price='320.00'
      />
    </div>
  )
}

Catalago.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Catalago)
