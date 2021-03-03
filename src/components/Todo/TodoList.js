import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = (props) => {
    const updateList=props.todos.map(function(item){
    return <TodoListItem key={item.id} item={item} deleteItem={props.deleteItem} 
    todos={props.todos} editingItem={props.editingItem} finishEditing={props.finishEditing}/>
    });
    return (
        <div>
            {updateList}
        </div>
    );
};

export default TodoList;