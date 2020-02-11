import React from 'react';
import ToDoItem from './ToDoItem.jsx';

export default function ToDoList ( { todos } ) {

	return (
		<ul className="list-group">
			{
				todos.map( (todo, index) => {
					return <ToDoItem todo={todo} key={index+1} />
				} )
			}
		</ul>
	);
}