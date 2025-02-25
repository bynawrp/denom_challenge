import { SET_AMOUNT, SET_DENOMINATIONS } from "../constants/action.js";

const initialState = {
    amount: 0,
    denominations: [],
};

const denomReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AMOUNT:
            return {
                ...state,
                amount: action.payload,
            };
        case SET_DENOMINATIONS:
            return {
                ...state,
                denominations: action.payload,
            };
        default:
            return state;
    }
};

export default denomReducer;
