import { ADD_CART, GET_CART, GET_PRODUCT, REMOVE_PRODUCT, SINGLE_PRODUCT } from "../ActionType";

let initailstate = {
    product: [],
    single_product: {},
    cart: [],
}

export const UiPrdcuts = (state = initailstate, { type, payload }) => {

    switch (type) {
        case GET_PRODUCT:
            return {
                ...state,
                product: payload
            }
        case SINGLE_PRODUCT:
            return {
                ...state,
                single_product: payload,
            };

        case ADD_CART:
            return {
                ...state,
                cart: [...state.cart, payload],
            };

        case GET_CART:
            return {
                ...state,
                cart: payload,
            };


        case REMOVE_PRODUCT:
            return {
                ...state,
                cart: state.cart.filter((ele) => ele.id !== payload)
            }
        default:
            return state;
    }

}