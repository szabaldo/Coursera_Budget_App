import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
    }
    return (
<div className='alert alert-success'>
    {/* <label for="currency">Currency ({currency})</label> */}
    <select className="alert alert-success" id="currency" onChange={(handleCurrencyChange)}> Currency ({currency})
        <option className="alert alert-success" value="$">$ Dollar</option>
        <option className="alert alert-success" value="£">£ Pound</option>
        <option className="alert alert-success" value="€">€ Euro</option>
        <option className="alert alert-success" value="₹">₹ Ruppee</option>
    </select>
</div>
    );
};
export default Currency;