import React  from 'react';
import ExpenseDate from './ExpenseDate';
import Cards from '../UI/Cards';
import './ExpenseItems.css'

const ExpenseItem = (props) => {
    return (
        <li>
        <Cards className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">₹{props.amount}</div>
            </div>
           
        </Cards></li>
    );
};

export default ExpenseItem;