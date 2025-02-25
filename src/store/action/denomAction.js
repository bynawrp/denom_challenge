import { SET_AMOUNT, SET_DENOMINATIONS } from "../constants/action.js";

export const setAmount = (amount) => ({
    type: SET_AMOUNT,
    payload: amount,
});

export const setDenominations = (amount, denom) => {
    let _amount = amount;
    const denominations = denom
        .map(denomination => {
            const count = Math.floor(_amount / denomination);
            _amount %= denomination;
            return { denomination, count };
        })
        .filter(item => item.count > 0);

    return {
        type: SET_DENOMINATIONS,
        payload: denominations,
    };

};