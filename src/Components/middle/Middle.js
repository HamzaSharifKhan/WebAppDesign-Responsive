import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import DataFlow from './DataFlow';
const useStyles = makeStyles((theme) => ({
     Middle_Container: {
          paddingTop: theme.spacing(10)
     }
}))
export default function Middle() {
     const classes = useStyles();
     return (
          <Container className={classes.Middle_Container}>
               <DataFlow />
               <DataFlow />
               <DataFlow />
               <DataFlow />
               <DataFlow />
               <DataFlow />
          </Container>
     )
}
