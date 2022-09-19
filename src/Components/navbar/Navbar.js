import React ,{useState} from 'react'
import { alpha, AppBar, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Cancel, NotificationImportant, Search, SearchOutlined } from '@material-ui/icons';
import { Avatar, Badge } from '@mui/material';
import { purple } from '@mui/material/colors';


const useStyles = makeStyles((theme) => ({
     App_Bar_Main_Container: {
          
          display: 'flex',
          justifyContent: 'space-between',
          background: "linear-gradient(to left, #cc2b5e  0%, #753a88 100%)",
     },
     Logo_Large_Screen: {
          display: "none",
          [theme.breakpoints.up("sm")]: {
               display: "block",
          },
     },
     Logo_Small_Screen: {
          display: "block",
          [theme.breakpoints.up("sm")]: {
               display: "none",
          }
     },
     Search_Div_Main: {
          display: "flex",
          alignItems: "center",
          borderRadius: theme.shape.borderRadius,
          backgroundColor: alpha(theme.palette.common.white, 0.15),
          '&:hover': {
               backgroundColor: alpha(theme.palette.common.white, 0.25),
          },
          width: "50%",
          [theme.breakpoints.down("sm")]:{
               display: (props)=>props.searchClick?"flex":"none",
               width: "70%",
          }
     },
     Input_Search: {
          color: "white",
          marginLeft: theme.spacing(1)
     },
     cancel:{
          [theme.breakpoints.up('sm')]:{
               display: "none"
          }
     },
     icons_Style:{
          display: "flex",
          alignItems: "center",
          [theme.breakpoints.down('sm')]:{
               display: (props)=>props.searchClick?"none":"flex"
          }
          
     },
     badgeStyle:{
          marginRight:theme.spacing(3),
     },
     search:{
          marginRight:theme.spacing(3),
          [theme.breakpoints.up('sm')]:{
               display: "none"
          }
     }
     
}
))
export default function Navbar() {
     const [searchClick, setSearchClick] = useState(false)
     const classes = useStyles({searchClick});
     return (
          <div>
               <AppBar position='fixed'>
                    <Toolbar className={classes.App_Bar_Main_Container}>
                         {/* For Large Screen */}
                         <Typography variant="h6" className={classes.Logo_Large_Screen}>
                              Hamza Sharif Khan
                         </Typography>
                         {/* For Small Screen */}
                         <Typography variant="h6" className={classes.Logo_Small_Screen}>
                              Hamza
                         </Typography>
                         <div className={classes.Search_Div_Main}>
                              <Search className={classes.Search_Component} />
                              <InputBase className={classes.Input_Search} placeholder='Search...' />
                              <Cancel className={classes.cancel} onClick={()=>setSearchClick(!searchClick)}/>
                         </div>
                         <div className={classes.icons_Style}>
                              <SearchOutlined className={classes.search} onClick={()=>setSearchClick(!searchClick)}/>
                              <Badge badgeContent={10} color="secondary" className={classes.badgeStyle}>
                                   <NotificationImportant color="white" />
                              </Badge>
                              <Avatar
                                   sx={{ bgcolor: purple[600] }}
                                   alt="Hamza Sharif"
                                   src="/broken-image.jpg"
                              >
                                   H
                              </Avatar>
                         </div>
                    </Toolbar>
               </AppBar>
          </div>
     )
}
