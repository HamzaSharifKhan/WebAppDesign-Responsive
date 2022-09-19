import { Card, CardContent, CardActionArea, CardMedia, Typography, makeStyles, CardActions, Button } from '@material-ui/core'
import React from 'react'
import img from './natureImage.jpg'
const useStyles = makeStyles((theme) => ({
     picture:{
          height: 250,
          [theme.breakpoints.down("sm")]:{
          height: 150,
          }
     },
     Card_Container:{
          marginBottom:theme.spacing(5)

     }
}))
export default function DataFlow() {
     const classes =useStyles()
     return (
          <div>
               <Card className={classes.Card_Container}>
                    <CardActionArea>
                         <CardMedia
                              image={img}
                              title="Nature"
                              className={classes.picture}
                         />
                         <CardContent>
                              <Typography gutterBottom variant="h5">
                                   Nature is Loving
                              </Typography>
                              <Typography  variant="body2">
                                   Nature is very Beautiful.They give us Oxygen and absorb Carbon Dioxide and remove Pollution.
                                   Nature, in the broadest sense, is the physical world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.
                                   Nature can refer to the general realm of living plants and animals, and in some cases to the processes associated with inanimate objects—the way that particular types of things exist and change of their own accord, such as the weather and geology of the Earth.
                              </Typography>
                         </CardContent>
                         <CardActions>
                              <Button variant='contained' size="small" color="secondary">Share</Button>
                              <Button variant='contained'  size="small" color="secondary">Learn more</Button>
                         </CardActions>
                    </CardActionArea>
               </Card>
          </div>
     )
}
