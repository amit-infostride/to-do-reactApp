import React from 'react'
import TodoItem from '../MyComponents/TodoItem'

const Todos = (props) => {
  let myStyle={
    minHeight:"70vh",
    margin:"40px auto"
  }
  return (
    <div className='container ' style={myStyle}>
         <h3 className='my-3'>Todos List</h3>
         {/* {props.todos} */}
         {/* <TodoItem todo={props.todos[0]} /> */}   
                {/*it is static data      we use for loop for dynamic data */}
         
         {props.todos.length===0? "No Todos to display" : 
        props.todos.map((todo)=>{
          return(<TodoItem  todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
         
          
        )
        
        })
        }
    </div>
  ) 
}
 
export default Todos
