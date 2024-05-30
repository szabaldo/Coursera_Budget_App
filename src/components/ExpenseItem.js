import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        {/* <td>
            <button onClick={event=> increaseAllocation(props.name)}>
                <img src='green_plus.jpg' width="10px" height="10px"></img>
            </button>
        </td>
        <td>
            <button onClick={event=> decreaseAllocation(props.name)}>
                <img src='red_minus.ico' width="1.5rem" height="1.5em"></img>
            </button>
        </td> */}
        <td>
            <input type="image" src="green_plus.jpg" style={{width: "1.5em"}} onClick={event=> increaseAllocation(props.name)} />
        </td>
        <td>
            <input type="image" src="red_minus.png" style={{width: "1.5em"}} onClick={event=> decreaseAllocation(props.name)} />
        </td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;