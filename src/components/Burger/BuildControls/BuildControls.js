import React from "react";
import classes from './BuildControls.css'
import BuildControl from "./BuildControl/BuildControl";


const controls = [
    {label:'Salad', type: 'salad'},
    {label:'Bacon', type: 'bacon'},
    {label:'Cheese', type: 'cheese'},
    {label:'Meat', type: 'meat'},
]
const BuildControls = (props)=>(
    <div className={classes.BuildControls}>
        <p><strong>Price: N{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl=>(
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                removed={()=>props.ingredientRemoved(ctrl.type)}
                added={()=>props.ingredientAdded(ctrl.type)}
            />
        ))}
        <button className={classes.order} onClick={props.ordered}>ORDER NOW</button>
    </div>
);


export default BuildControls
