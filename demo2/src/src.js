'use strict';

// src1
const React = require('react');
const ReactDOM = require('react-dom');
const selfLib = require('selfLib');
const style = require('style');

selfLib.alertTest();

const Todo = () => {
	return (
		<div className={ `${style.content} ${style.src1}` }>SRC</div>
	);
};

ReactDOM.render(
    <Todo></Todo>,
    document.getElementById('content')
);