import React, {Component} from 'react';
import Aux from "../../hoc/aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/Ui/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";


const INGRIDIENT_PRICE ={
    meat: 0.4,
    bacon: 0.5,
    salad: 0.7,
    cheese: 0.9
}

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
        totalPrice: 4,
        purchasable: false,
        showModal: false
    }

   updatePurchaseState =()=>{
   const ingridients = {
       ...this.state.ingredients
   }
   const sum = Object.keys(ingridients).map(idKey=>{
  return ingridients;
   }).reduce((sum, el)=>{
       return sum + el
   }, 0);
   this.setState({purchasable: sum > 0});
   }

    addIngredienthandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount+1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount+1;
    const priceAddition = INGRIDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState();
    console.log('food added');
    }

    removeIngridienthandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){
            return
        }
        const updatedCount = oldCount-1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGRIDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState();
        console.log('food deleted');
    }


    orderNow=()=>{
        this.setState({showModal: true});
    }

    closeModal = ()=>{
        this.setState({showModal: false})
    }


    render() {
        return (
            <Aux>
                <Modal show={this.state.showModal} modalClosed={this.closeModal}>
                    <OrderSummary ingredients={this.state.ingredients} closeOrder={this.closeModal} price={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ordered={this.orderNow}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ingredientRemoved={this.removeIngridienthandler}
                ingredientAdded={this.addIngredienthandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;
