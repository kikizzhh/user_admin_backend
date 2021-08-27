import React, { Component } from 'react'
import Item from '../Item'
import PropTypes from 'prop-types';

export default class List extends Component {

    static propTypes ={
        todos:PropTypes.array.isRequired,
        onCheckChange:PropTypes.func.isRequired
    }

    
    handleEnter=(c)=>{
        // console.log(c);
    }

    handleLeave=(c)=>{
        // console.log(c);
    }


    render() {
        const{todos,onCheckChange,deleteItem}=this.props;
        return (
            <ul className="todo-main" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
                
            {
                todos.map((todo)=>{
                    return <Item key={todo.id} onCheckChange={onCheckChange} deleteItem={deleteItem} {...todo}/>
                })
            }
        </ul>
        )
    }
}
