import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'

import Typography from '@material-ui/core/Typography'
import Buttons from './Buttons'

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 240
  }
}

function CatalagoCard (props) {
  const { classes, title, text, price, list } = props
  return (
    <Grid container spacing={24}>
      {list.map(value => (
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={value.img}
                title='lauras place bisuteria'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {value.title}
                </Typography>
                <Typography component='p'>{value.text}</Typography>
                <Typography component='p'>Lps {value.price}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Buttons
                backgroundColor='#de137a'
                color='#fff'
                size='small'
                text='agregar al carro'
              />

              <Buttons color='primary' size='small' text='ver detalle' />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

CatalagoCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CatalagoCard)
