import React from 'react';
import '../../component/Head/Head.css'

const list =(props)=>{
    return(
        <div>
        <ul >
        
        {props.list.map((list ,key) => {
            return (
                 <li 
                  
                  className={'Task'} 
                  key={Math.random()} 
                  id ={key}
                  
                  >
                      {/* <button className={'ButtonD'} >done</button> */}
                     {list}
                      <button className={'ButtonX'} onClick={()=>{

                      props.deleteList(key)} }>x</button>
                  </li>
                  
                     )
              })}
          {/* <li>{this.state.task}</li> */}
      </ul>
      </div>
    )

}

export default list;