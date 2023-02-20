import React, { useState } from 'react';

import Cards from "../UI/Cards";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpenseChart';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')


    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };


    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Cards className="expenses">
                <ExpensesFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler} />

                <ExpensesChart expenses={filteredExpenses} />

                <ExpensesList items={filteredExpenses} />
            </Cards>
        </div>


    );

}
export default Expenses;