import React from "react";
import classes from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <>
    <div className={classes.overlay}></div>
    <div class={classes["lds-ellipsis"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </>
  );
};

export default Loader;
