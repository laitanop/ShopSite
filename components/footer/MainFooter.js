import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Logo from '../Logo'
import Buttons from '../common/Buttons'
import SocialIconButton from '../common/socialIconButton'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: '#fabe2c'
  }
})

function MainFooter (props) {
  const { classes } = props

  return (
    <div>
      <Paper className={classes.root} />

      <Grid container spacing={0} style={{ backgroundColor: '#fff' }}>

        <Grid item xs={4}>
          <Logo />
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={0} style={{ textAlign: 'justify' }}>

            <Grid item xs={4}>
              <Buttons text='Inicio' />

            </Grid>
            <Grid item xs={4}>
              <Buttons text='contacto' />
            </Grid>
            <Grid item xs={4}>
              <Buttons text='preguntas' />
            </Grid>
            <Grid item xs={4}>
              <Buttons text='nosotros' />
            </Grid>
            <Grid item xs={4}>
              <Buttons text='Catalogo' />
            </Grid>
            <Grid item xs={4}>
              <Buttons text='Terminos y condiciones' />
            </Grid>
          </Grid>

        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={24}>

            <Grid item xs={12}>
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
              >
                Danos un like en Facebook
              </div>

            </Grid>

            <Grid
              item
              xs={12}
              style={{
                textAlign: 'center'
              }}
            >
              Aqui va el widget

            </Grid>

            <Grid item xs={12}>

              <Grid container>
                <Grid item xs={12}>
                  <Grid container justify='center' spacing={24}>

                    <Grid item>
                      <SocialIconButton
                        link='https://www.facebook.com/laurasplaceins/'
                        icon='fab fa-facebook-square fa-2x'
                        style={{
                          color: '#de137a',
                          '&:hover': {
                            color: '#de137a'
                          }
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <SocialIconButton
                        link='https://www.instagram.com/laurasplaceins/?hl=en'
                        icon='fab fa-instagram fa-2x'
                        style={{
                          color: '#de137a',
                          '&:hover': {
                            color: '#de137a'
                          }
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <SocialIconButton
                        link='https://www.instagram.com/laurasplaceins/?hl=en'
                        icon='fab fa-whatsapp-square fa-2x'
                        style={{
                          color: '#de137a',
                          '&:hover': {
                            color: '#de137a'
                          }
                        }}
                      />
                    </Grid>

                  </Grid>
                </Grid>
              </Grid>

            </Grid>

          </Grid>
        </Grid>

      </Grid>

      <Paper className={classes.root} elevation={1}>
        <div style={{ color: '#de137a', textAlign: 'center' }}>
          Copyright ©  2018 Laura ´s place, Honduras
        </div>
        <div style={{ color: '#de137a', textAlign: 'center' }}>
          Powered by: Pamela Rivera
        </div>
        <div />
      </Paper>
    </div>
  )
}

MainFooter.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MainFooter)
