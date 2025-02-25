import React from "react";

const Input = ({ value, onChange }) => {
    return (
        <div>
            <input
                type="number"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
