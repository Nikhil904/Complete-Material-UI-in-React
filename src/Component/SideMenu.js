import { makeStyles } from "@material-ui/core";
import React from "react";
const styles = makeStyles({
    SideMenu:{
        display:"flex",
        flexDirection:"column",
        position:"absolute",
        width:"320px",
        left:"0px",
        height:"100%",
        backgroundColor:"#253053"
    }
});
const SideMenu = () => {
    const classes = styles();
  return (
      <>
      <div className={classes.SideMenu}>    
  </div>
  </>
  );
};
export default SideMenu;
