'use strict';

// src2
const React = require('react');
const ReactDOM = require('react-dom');

const style = require('./style.less');

const Todo = () => {
	return (
		<div className={ `${style.content} ${style.src2}` }>SRC2</div>
	);
};

ReactDOM.render(
    <Todo></Todo>,
    document.getElementById('src2')
);