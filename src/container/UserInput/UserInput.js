import React from 'react';
import '../../component/Head/Head.css'


const userInput=(props)=>{
    return(
              <div className ={'Head'}>
                 <input 
                 className={'Input'} 
                 type= {'text'} 
                 placeholder="Title..." 
                 value={props.task} 
                 onChange={props.onChangeHandler} 
                     
                 />

                 <button onClick={props.onClickHandler}>Click to add</button>

                </div>
    )
}

export default userInput;