import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import CatalogoCard from '../common/CatalogoCard'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
})
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
    price: '920.00',
    img: '/static/c2.jpg'
  },
  {
    id: 3,
    title: 'collar ',
    subheader: 'subheader',
    text: 'texto',
    price: '720.00',
    img: '/static/c3.jpg'
  },
  {
    id: 4,
    title: 'collar ',
    subheader: 'subheader',
    text: 'texto',
    price: '300.00',
    img: '/static/c4.jpg'
  }
]

class Catalogo extends React.Component {
  render () {
    function myItem () {
      console.log('le estoy dando onclick')
    }
    const { classes } = this.props

    return (
      <div style={{ padding: 50 }}>
        <CatalogoCard list={list} click={myItem} />
      </div>
    )
  }
}

Catalogo.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Catalogo)
