import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAmount, setDenominations } from "../store/action/denomAction.js";
import { selectDenominations, selectAmount } from "../store/selector/selector.js";
import Input from './Input';
import Button from './Button';

const defaultDenomination = [100, 50, 20, 10, 5, 1];

const Denomination = () => {
    const dispatch = useDispatch();
    const amount = useSelector(selectAmount);
    const denominations = useSelector(selectDenominations);
    const [inputAmount, setInputAmount] = useState(amount);

    const handleAmountChange = (e) => {
        setInputAmount(e.target.value);
    };

    const handleCalculate = () => {
        dispatch(setAmount(Number(inputAmount)));
        dispatch(setDenominations(Number(inputAmount), defaultDenomination));
    };

    const handleReset = () => {
        setInputAmount(0);
        dispatch(setAmount(0));
        dispatch(setDenominations(0, defaultDenomination));
    };

    return (
        <div className="container">
            <Input value={inputAmount} onChange={handleAmountChange} />
            <Button onClick={handleCalculate}>Dénomination</Button>
            <Button onClick={handleReset}>Réinitialiser</Button>

            <div className="result">
                {denominations.length > 0 ? (
                    <ul>
                        {denominations.map((item, index) => (
                            <li key={index}>
                                Dénomination {item.denomination} unité(s) : {item.count}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Aucune dénomination calculée.</p>
                )}
            </div>
        </div>
    );
};

export default Denomination;
