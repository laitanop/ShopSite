import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'

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
  // function myItem () {
  //   console.log('le estoy dando onclick')
  // }
  const id = 'item'
  const { classes, title, text, price, list, click } = props
  return (
    <Grid container spacing={24}>
      {list.map(value => (
        <Grid item xs={3} key={value.id}>
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
                color='black'
                size='small'
                text='agregar al carro'
              />

              <Buttons
                color='primary'
                size='small'
                text='ver detalle'
                // click={click}
                // link='item'
              />
              <Link as={`/catalogo/${id}`} href={`/post?title=${id}`}>
                link
              </Link>
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
