import { Container, makeStyles, Typography } from '@material-ui/core'
import { Home } from '@material-ui/icons'
import WorkIcon from '@material-ui/icons/Work';
import PhoneIcon from '@material-ui/icons/Phone';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React from 'react'

const useStyles = makeStyles((theme) => ({
     item: {
          display: "flex",
          alignItems: "center",
          marginBottom: theme.spacing(3),
          [theme.breakpoints.up("sm")]: {
               marginBottom: theme.spacing(4)
          },
          color:"white"

     },
     SideBar_Container: {

          height:"100vh",
          position:"sticky",
          top:0,
          paddingTop: theme.spacing(10),
          background: "linear-gradient(to left, #cc2b5e  0%, #753a88 100%)",
          borderRight:"#999",
          

     },
     Icon: {
          marginRight:theme.spacing(1),
          [theme.breakpoints.up("sm")]:{
               fontSize:"18px"    
          }

     },
     text:{
          [theme.breakpoints.down("sm")]:{
               display:"none",
          }
     }
}
))
export default function SideBar() {
     const classes = useStyles()
     return (
          <Container className={classes.SideBar_Container}>
               <div className={classes.item}>
                    <Home className={classes.Icon} />
                    <Typography className={classes.text}>Home</Typography>
               </div>
               <div className={classes.item}>
                    <PhoneIcon className={classes.Icon} />
                    
                    <Typography className={classes.text}>Contact</Typography>
               </div>
               <div className={classes.item}>
                    <WorkIcon className={classes.Icon}/>
                    <Typography className={classes.text}>Career</Typography>
               </div>
               <div className={classes.item}>
                    <ExitToAppIcon className={classes.Icon}/>
                    <Typography className={classes.text}>Logout</Typography>
               </div>
          </Container>




     )
}
