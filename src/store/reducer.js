import * as actionTypes from './actions';


const initialState = {
    ingredients: {
        meat: 0,
        bacon: 0,
        cheese: 0,
        salad: 0
    },
    totalPrice: 4
}



const INGRIDIENT_PRICE ={
    meat: 0.4,
    bacon: 0.5,
    salad: 0.7,
    cheese: 0.9
}

const reducer = (state=initialState, action) => {


    switch (action.types) {
        case actionTypes.ADD_INGRIDIENT:
            return {
             ...state,
                ingredients: {
                 ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGRIDIENT_PRICE[action.ingredientName]
            };

        case  actionTypes.REMOVE_INGRIDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGRIDIENT_PRICE[action.ingredientName]

            };

        default:
            return  state;

            // break;

    }


}


export default reducer;
