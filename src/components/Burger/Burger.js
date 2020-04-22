import React, {Component} from 'react';
import classes from './Burger.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

class Burger extends Component {
    render() {

        // here we are passing ingredients as props; using obj.keys cos tis not an array
        let transaformedIngredients = Object.keys(this.props.ingredients)
            .map((igKey) => {
                return [...Array(this.props.ingredients[igKey])].map((_, index) => {
                    return <BurgerIngredient key={igKey + index} type={igKey}/>
                })
            })
            .reduce((arr, el)=>{
                return arr.concat(el);
            });
        if (transaformedIngredients == 0){
            transaformedIngredients = <p>please start adding ingredient</p>
        }
        console.log(transaformedIngredients);
        return (
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top"/>
                {/*<BurgerIngredient type="cheese"/>*/}
                {/*<BurgerIngredient type="meat"/>*/}
                {/*<BurgerIngredient type="salad"/>*/}
                {/*<BurgerIngredient type="bacon"/>*/}
                {transaformedIngredients}
                <BurgerIngredient type="bread-bottom"/>
            </div>
        );
    }
}

export default Burger;
