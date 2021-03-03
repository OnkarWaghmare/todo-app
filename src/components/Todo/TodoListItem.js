import React from 'react';

const TodoListItem = (props) => {
    let todoValue=props.item.value;
    const editingItem=()=>{
        //console.log("i am editing",props.item.id);
        props.editingItem(props.item.id);
    }
    
    const delItem=()=>{
        props.deleteItem(props.item.id);
    }
    const changeTodoValue=(e)=>{
        todoValue=e.target.value
    }
    const finishEditing=()=>{
        props.item.value=todoValue;
        props.finishEditing(props.item);
        props.item.isEditing=false;
    }
    return (
        <div style={{
            backgroundColor:"#ffab73",
            width:"300px",
            padding:"10px",
            fontSize:"20px"
        }}>
            <li className="list">
            {props.item.isEditing ?(
                <>
                <textarea className="editTask" onChange={changeTodoValue} defaultValue={props.item.value}></textarea>
                <button className="saveTask" onClick={finishEditing}>Update Task</button>
                </>
                ):(
                    <>
                    {props.item.value}
                    <span>  </span>
                    <button onClick={editingItem}
                    style={{margin:"5px"}}>Edit</button>
                    <span>  </span>
                    <button onClick={delItem}
                    style={{margin:"5px"}}>Delete</button>
                    </>
                )
            }
            </li>
            
        </div>
    );
};

export default TodoListItem;