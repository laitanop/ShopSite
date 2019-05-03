import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Buttons from '../common/Buttons'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 10
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

function CenteredGrid (props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={8}>
          <div>
            REECHO 20" 1-pack 3/4 Full Head Curly Wave Clips in on Synthetic
            Hair Extensions Hair pieces for Women 5 Clips 4.6 Oz Per Piece -
            Dark brown
          </div>
          {/* grid start */}
          <Grid container spacing={24} style={{ marginTop: 50 }}>
            <Grid item xs={2}>
              {/* grid start */}

              <Grid container spacing={24}>
                <Grid item xs={6}>
                  <img
                    src='/static/c3.jpg'
                    alt='Smiley face'
                    height='42'
                    width='42'
                  />
                </Grid>
              </Grid>

              {/* end grid  */}
            </Grid>
            <Grid
              item
              xs={10}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <img
                src='/static/c2.jpg'
                alt='Smiley face'
                height='442'
                width='442'
              />
            </Grid>
          </Grid>

          {/*  grid end */}
          <div>
            About the product Real remy human hair-natural,durable,reusable,easy
            make-up. Can be dyed,washed,bleached, curled and
            straightened(temperature better below 356℉/180℃ for a short time)
            Grade AAAAAAA,no-tangle,no-shedding,product life:6 to12
            months(depending on care and usage) Double wefted (two wefts sewed
            together) - more hair than typical extensions and don't fall out
            easily,shedding free. One pack is enough to full head for thin or
            fine type of hair Hair ends:natural hair ends without cut. About 2cm
            longer than the marked length for you to cut the hair to more
            closely match your hair length and avoid thin out at the end
            Additional free gifts: two clips,thread and needle. Clips stitched
            on hairs and removable,replaceable.
          </div>
        </Grid>
        <Grid item xs={4}>
          <div>Precio Lps 320.00</div>
          <Buttons text='comprar' backgroundColor='#de137a' color='white' />
        </Grid>
      </Grid>
    </div>
  )
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CenteredGrid)
