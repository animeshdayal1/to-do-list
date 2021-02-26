import React from 'react';
import '../../component/Head/Head.css'

const list =(props)=>{
    return(

        <ul className={'Task'}>
        {props.list.map((list ,index) => {
            return (
                 <li 
                  
                  className={'Task'} 
                  key={Math.random()} 
                  
                  >
                      <button className={'ButtonD'} >done</button>
                     {list}
                      <button className={'ButtonX'} onClick={props.deleteList}>x</button>
                  </li>
                     )
              })}
          {/* <li>{this.state.task}</li> */}
      </ul>
    )

}

export default list;