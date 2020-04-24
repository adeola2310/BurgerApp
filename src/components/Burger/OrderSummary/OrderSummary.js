import React from "react";
import Aux from '../../../hoc/aux';
import classes from './OrderSummary.css'

const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map((igKey, index) => {
        return (
            <li key={igKey}>
                {index + 1}<span>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
    });

    return (
        <Aux>
            <div className={classes.orderSummary}>
                <h3>Your Order</h3>
                <p>Your delicious item are as follows:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Continue to checkout?</p>
                <p>Total Price is N{props.price.toFixed(2)}</p>
                <button onClick={props.closeOrder}>Cancel order</button>
            </div>
        </Aux>
    )
}


export default OrderSummary
