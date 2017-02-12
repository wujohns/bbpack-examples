'use strict';

// src1
const React = require('react');
const ReactDOM = require('react-dom');

const style = require('./style.less');

const Todo = () => {
	return (
		<div className={ `${style.content} ${style.src1}` }>SRC1</div>
	);
};

ReactDOM.render(
    <Todo></Todo>,
    document.getElementById('src1')
);