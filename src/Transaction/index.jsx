import React from "react";

export const Transaction = () => {
    return (
        <div>
            <p>Add new transaction</p>
            <form >
            <label>Text:
            <input type="text" />
             </label>
            </form>
            <form >
            <label>Amount:
            <input type="text" />
             </label>
            </form>
            
        </div>
    )
}