import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';

export default class App extends Component {

    state={
        todos:[
            {id:'001', name:'eat',done:false},
            {id:'002', name:'eat',done:true},
            {id:'003', name:'eat',done:false},
        ],

    }

    addItem=(todoObj)=>{
        const {todos} = this.state;
        const newTodos =[todoObj,...todos];
        this.setState({todos:newTodos});
        console.log(this.state.todos);
    }

    onCheckChange=(id,checked)=>{
        const {todos} = this.state;
        const newTodos = todos.map((todo)=>{
            if(todo.id === id) return {...todo,done:checked};
            else return todo;
        })

        this.setState({todos:newTodos});
    }

    deleteItem =(id)=>{
        const {todos} = this.state;
        const newTodos = todos.filter((todo)=>{
            return todo.id !== id;
        })

        this.setState({todos:newTodos});
    }

    checkAll=(done)=>{
        const {todos} = this.state;
        const newTodos = todos.map((todo)=>{
            return {...todo,done};
        })

        this.setState({todos:newTodos});
    }

    deleteAllDone=()=>{
        const {todos} = this.state;
        const newTodos = todos.filter((todo)=>{
            return !todo.done;
        })

        this.setState({todos:newTodos});
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addItem={this.addItem} />
                    <List todos={this.state.todos} onCheckChange={this.onCheckChange} deleteItem={this.deleteItem}/>
                    <Footer todos={this.state.todos} checkAll={this.checkAll} deleteAllDone={this.deleteAllDone}/>
                </div>
            </div>
        )
    }
}
