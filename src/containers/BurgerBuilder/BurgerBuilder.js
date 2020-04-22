import React, {Component} from 'react';
import Aux from "../../hoc/aux";
import Burger from "../../components/Burger/Burger";


class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        ingredients: {
            meat: 0,
            bacon: 0,
            cheese: 0,
            salad: 0
        },
        buildSomething: true
    }
    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div><p>burger builder</p></div>
            </Aux>
        );
    }
}

export default BurgerBuilder;
