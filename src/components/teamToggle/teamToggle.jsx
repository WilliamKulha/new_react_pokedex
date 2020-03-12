import React from "react";
import classes from "./teamToggle.module.css";

const teamToggle = props => {
  const stylesForProp = {
    add: classes["Add"],
    remove: classes["Remove"],
    disabled: classes["Disabled"]
  };

  const style = stylesForProp[props.displayStyle];
  return (
    <button className={style} disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default teamToggle;
