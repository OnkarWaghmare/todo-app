import React, { useState } from 'react';
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";


const TodoContainer = () => {
    const [todos,setTodos]=useState([]);

    const deleteItem=(id)=>{
        const filtered_arr=todos.filter((item)=>item.id!==id);
        setTodos(filtered_arr);
    }

    const getNewId=()=>{
        let id=0;
        todos.map((item)=>{if (item.id>id) id=item.id});
        return id +=1;
    }
    const updateTodos=(newTodo)=>{
        const obj={
            id:getNewId(),
            value:newTodo,
            isEditing:false,
        }
        const copyArr=[...todos,obj];
        setTodos(copyArr);
    }

    const editingItem=(item_id)=>{
        
        const editing_arr=todos.map((item)=>{
            if(item.id==item_id){
                item.isEditing=true;
            }
            return item;
        });
        setTodos(editing_arr);
        //console.log(todos);
    }

    const finishEditing=(ele)=>{
        //console.log(ele);
        const editing_arr=todos.map((item)=>{
            if(item.id==ele.id){
                return ele;
            }
            return item;
        })
        setTodos(editing_arr);
    }

    return (
        <div className="container">

            <h2>To-Do App</h2>
            <TodoAdd updateTodos={updateTodos}></TodoAdd>
            <hr/>
            <br/>
            <TodoList todos={todos} deleteItem={deleteItem} editingItem={editingItem} finishEditing={finishEditing}></TodoList>
        </div>

    );
};

export default TodoContainer;