import React from "react";
import classes from './BuildControl.css'

const BuildControl = (props)=>(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.More} onClick={props.added}>Add</button>
        <button className={classes.Less} onClick={props.removed}>Delete</button>
    </div>
);


export default BuildControl
