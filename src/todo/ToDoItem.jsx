import React from 'react';
import Context from './context.jsx';
import InputData from './InputData.jsx';

export default function ToDoItem( { todo } ) {

	const { deleteTodo, completeTodo, onChangeValue  } = React.useContext(Context);
	
	let liClasses = ['list-group-item'];

	if ( todo.completed ) liClasses.push( 'completed' );
	
	let [inputText, setInputText] = React.useState(false); 
	let [inputNumber, setInputNumber] = React.useState(false);

	let submitValue = (type, value) => {
		setInputText(false);
		setInputNumber(false);
		
		if (type === 'number' ) return onChangeValue(todo.id, 'value', value);
		if ( value.trim() )	return onChangeValue(todo.id, type, value);
	}

	return (
		<li className={ liClasses.join(' ') }>
			<div className="row justify-content-around align-items-center">
				<input 
				type="checkbox" className="item-element check col-1" 
				onChange={() => completeTodo(todo.id)} 
								
				checked={todo.completed}	
				/>

				<div className="item-element text col" onClick={ () => setInputText(true) } > 
					{ inputText ? <InputData submitInput={submitValue} val={todo.text} type={'text'} /> : todo.text	}
				</div>
				<div className="item-element value col-3" onClick={ () => setInputNumber(true) } > 
					{	inputNumber ? <InputData submitInput={submitValue} val={todo.value} type={'number'} /> : todo.value	} 
				</div>
				<div className="item-element del col-1" onClick={ () => deleteTodo(todo.id) }> &times; </div>
			</div>
			
		</li>
	)
}