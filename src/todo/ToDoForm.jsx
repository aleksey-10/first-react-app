import React from 'react';
import DropDown from './DropDown';


export default function ToDoForm(props) {

	let [text, setText] = React.useState('');
	let [number, setNumber] = React.useState(0);

	function onsubmit(event) {
		event.preventDefault();

		props.createItem(text, number);
	}

	return (
		<form className="form row justify-content-around sticky-top" onSubmit={onsubmit}>
			<input type="text" onChange={event => setText(event.target.value)} className="form-control col-7 col-md-5" placeholder="Product" required />
			<input type="number" onChange={event => setNumber(event.target.value)} className="form-control col-4 col-md-2" placeholder="Value" />
			<input type="submit" className="form-control col-7 col-md-2 btn btn-info" value="Submit" />

			<input className="form-control col-4 col-md-2 btn btn-secondary dropdown-toggle" value="More" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
			<DropDown />

		</form>
	)
}