import React from 'react';

export default function InputData( props ) {
	return (
		<input 
			type={props.type}
			className="form-control"
			defaultValue={props.val}
			
			onKeyDown = {
				event => {
					if (event.key === 'Enter') {
						props.submitInput(props.type, event.target.value);
					}
				}
			}

			onBlur = {
				event => {
					props.submitInput(props.type, event.target.value)
				}
			}
			
			autoFocus 
		/> 
	)
}