import classes from './form.module.css';
import React from 'react';

const Form = ({ submitHandler, header, children }) => {
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<h3 className={classes.header}>{header}</h3>
			{children}
		</form>
	);
};

export default Form;
