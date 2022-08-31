import React from "react";
import classes from "./loader.module.scss";
import MoonLoader from "react-spinners/MoonLoader";

const Loader = () => {
  return (
    <div className={classes.wrapper}>
      <MoonLoader className={classes.loader} size={100} />
    </div>
  );
};

export default Loader;
