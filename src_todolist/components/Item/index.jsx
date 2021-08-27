import React, { Component } from 'react'

export default class Item extends Component {

    state={
        mouse:false,

    }



    handleMouse=(flag)=>{
        return ()=>{
            this.setState({mouse:flag});

        }
    }

    handleChange=(id)=>{
        return (event)=>{
            const {onCheckChange} = this.props;
            onCheckChange(id,event.target.checked);
        }
    }

    handleDelete=(id)=>{
        if(window.confirm('确定删除吗？')){
             this.props.deleteItem(id);
        }
           
    }


    render() {
        const {id, name, done} = this.props;
        return (
            <div>
                <li style={{backgroundColor:this.state.mouse? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input  type="checkbox" onChange={this.handleChange(id)} checked={done}  />
                    <span>{name}</span>
                </label>
                <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display:this.state.mouse? 'block':'none'} } >删除</button>
              </li>
            </div>
        )
    }
}
