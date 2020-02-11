import React from 'react';
import Context from './context.jsx';

export default function DropDown() {
    const { clear, getSum } = React.useContext(Context);

    return (

        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
            <button className="dropdown-item" type="button" onClick={ getSum }>SUM</button>
            <button className="dropdown-item" type="button" onClick={ clear }>Clear</button>
            <button className="dropdown-item" type="button">UP</button>
        </div>

    )
}

