import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpenses.css'

const NewExpenses = (props) => {
    const [isEditingg, setIsEditing] = useState(false);


    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {

            ...enteredExpenseData,
            id: Math.random().toString()

        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);

    };

    const stopEditingHandler = () => {
        setIsEditing(false);

    };


    return (

        <div className="new-expense">
            {!isEditingg && <button onClick={startEditingHandler}>Add New Expense</button>}

            {isEditingg && (<ExpenseForm
                onSaveExpenseData={SaveExpenseDataHandler}
                onCancel={stopEditingHandler}
            />)}
        </div>

    );

};

export default NewExpenses;