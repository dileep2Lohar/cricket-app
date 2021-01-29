import React from 'react'
import { makeStyles,Card,Grid,CardActions,CardContent,Button,Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  })


const MyCard = () => {

    const classes = useStyles();

    const GetmatchCart = () => {
        return(
            <Card className={classes.root}>
                <CardContent>
                    <Grid container justify="center">
                        <Grid item>
                            <Typography >
                                first team
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography >
                                image
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography >
                                first team
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <Grid container justify="center">
                    <CardActions>
                        <Button variant="contained" color="primary">show detail</Button>
                        <Button variant="contained" color="primary"> {new Date().toString()} </Button>
                    </CardActions>
                </Grid>

                
            </Card>

        )
    }
    return GetmatchCart()
}

export default MyCard