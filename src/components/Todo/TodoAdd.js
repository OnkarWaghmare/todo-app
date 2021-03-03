import React from 'react';



const TodoAdd = (props) => {
    let text="";
    let emptyString=false;
    const updateTodoValue=(e)=>{
        text=e.target.value;
        if(e.target.value!==""){
            emptyString=true;
        }else{
            emptyString=false;
        }
    }
    const addNewTodo=()=>{
        if(emptyString){
        props.updateTodos(text);
        text="";
        emptyString=false;
        document.getElementById("text").value="";
        }
    }
    return (
        <div style={{backgroundColor:"#c8c6a7",
                    padding:"20px"
                }}>
            <textarea id="text" onChange={updateTodoValue}
            style={{
                width:"500px",
                height:"25px",
                margin:"10px",
                fontSize:"20px"
            }}></textarea>
            <br/>
            <button variant="primary" id="btn" onClick={addNewTodo} disabled={emptyString}
            style={{
                height:"35px",
                width:"70px",
                borderRadius:"20%",
                backgroundColor:"#00917c",
                color:"black",
                fontSize:"20px"
            }}>Add</button>
        </div>
    );
};

export default TodoAdd;