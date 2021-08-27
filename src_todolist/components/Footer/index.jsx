import React, { Component } from 'react'

export default class Footer extends Component {

    handleCheckAll=(event)=>{
            this.props.checkAll(event.target.checked);
    }

    clearAllDone=()=>{
      
        if(window.confirm('确定要删除所有以完成项目吗？')){
            this.props.deleteAllDone();
        }
     
    }


    render() {
        const {todos,} = this.props;

        const total=todos.length;

        const doneCount = todos.reduce((pre,cur)=>{
            return pre+(cur.done?1:0);
        },0)

        return (
            <div className="todo-footer">
            <label>
                <input onChange={this.handleCheckAll} type="checkbox" checked={total===doneCount && (total !==0)?true:false}/>
            </label>
            <span>
                <span>已完成{doneCount}</span> / 全部{todos.length}
            </span>
            <button onClick={this.clearAllDone} className="btn btn-danger">清除已完成任务</button>
        </div>
        )
    }
}
