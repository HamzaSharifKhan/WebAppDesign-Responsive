import { Grid ,makeStyles} from '@material-ui/core';
import React from 'react';
import Middle from './Components/middle/Middle';
import Navbar from './Components/navbar/Navbar';
import Right from './Components/rightbar/Right';
import SideBar from './Components/sidebar/SideBar';
const useStyles = makeStyles((theme) => ({
  Right: {
    [theme.breakpoints.down("sm")]:{
      display:"none"
    }
  }
}))
function App() {
  const classes=useStyles();
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <SideBar />
        </Grid>

        <Grid item sm={7} xs={9}>
          <Middle />
        </Grid>

        <Grid item sm={3} className={classes.Right}>
          <Right />
        </Grid>
      </Grid>


    </>

  );
}

export default App;
