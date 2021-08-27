import React, { Component } from 'react'
import {nanoid} from 'nanoid';
import PropTypes from 'prop-types';

export default class Header extends Component {

    static propTypes ={
        addItem:PropTypes.func.isRequired
    }

    handleKeyUp = (c) => {
        const addItem = this.props.addItem;

        if (c.keyCode === 13 && c.target.value !== '') {
            console.log(c, c.target.value);
            const todoObj = {id:nanoid(),name:c.target.value, done:false};
            addItem(todoObj);
            c.target.value = '';
        }
        
    }


    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
