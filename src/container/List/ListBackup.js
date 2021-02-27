import React from 'react';
import '../../component/Head/Head.css'

const list =(props)=>{
    return(

        <ul className={'Task'}>
        {this.state.list.map((list ,index) => {
            return (
                 <li 
                  
                  className={'Task'} 
                  key={Math.random()} 
                  
                  >
                      <button className={'ButtonD'} >done</button>
                     {list}
                      <button className={'ButtonX'} onClick={(key)=>this.deleteList(key)}>x</button>
                  </li>
                     )
              })}
          {/* <li>{this.state.task}</li> */}
      </ul>
    )

}

export default list;










<div>

<div className ={'Head'}>
   <input 
   className={'Input'} 
   type= {'text'} 
   placeholder="Title..." 
   value={this.state.task} 
   onChange={this.onChangeHandler} 
       
   />

   <button onClick={this.onClickHandler}>Click to add</button>

  </div>