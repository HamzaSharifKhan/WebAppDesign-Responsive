import React from "react";
import {
     Link,
     Container,
     ImageList,
     ImageListItem,
     makeStyles,
     Typography,
     Divider,
   } from "@material-ui/core";

   const useStyles = makeStyles((theme) => ({
     container: {
       paddingTop: theme.spacing(10),
       position: "sticky",
       top: 0,
     },
     title: {
       fontSize: 16,
       fontWeight: 500,
       color: "#555",
     },
     link: {
       marginRight: theme.spacing(2),
       color: "#555",
       fontSize: 16,
     },
   }));
   
   const Right = () => {
     const classes = useStyles();
     return (
       <Container className={classes.container}>
         
         <Typography className={classes.title} gutterBottom>
           Gallery
         </Typography>
         <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
           <ImageListItem>
             <img
               src="https://material-ui.com/static/images/image-list/breakfast.jpg"
               alt=""
             />
           </ImageListItem>
           <ImageListItem>
             <img
               src="https://material-ui.com/static/images/image-list/burgers.jpg"
               alt=""
             />
           </ImageListItem>
           <ImageListItem>
             <img
               src="https://material-ui.com/static/images/image-list/camera.jpg"
               alt=""
             />
           </ImageListItem>
           <ImageListItem>
             <img
               src="https://material-ui.com/static/images/image-list/morning.jpg"
               alt=""
             />
           </ImageListItem>
           <ImageListItem>
             <img
               src="https://material-ui.com/static/images/image-list/hats.jpg"
               alt=""
             />
           </ImageListItem>
           <ImageListItem>
             <img
               src="https://material-ui.com/static/images/image-list/vegetables.jpg"
               alt=""
             />
           </ImageListItem>
         </ImageList>
         <Typography className={classes.title} gutterBottom>
           Programming
         </Typography>
         <Link href="#" className={classes.link} variant="body2">
           Sport
         </Link>
         <Link href="#" className={classes.link} variant="body2">
           News
         </Link>
         <Link href="#" className={classes.link} variant="body2">
           Facts and Figures
         </Link>
         <Divider flexItem style={{marginBottom:5}}/>
         <Link href="#" className={classes.link} variant="body2">
           Media
         </Link>
         <Link href="#" className={classes.link} variant="body2">
           Science
         </Link>
         <Link href="#" className={classes.link} variant="body2">
           Life
         </Link>
       </Container>
     );
   };
   
   export default Right;