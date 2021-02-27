
import { Component } from 'react';

import Head from './component/Head/Head';
import './App.css';


class App extends Component {

  makeEvent=()=>{

  }



  render(){
  return (
    <div className={"App"}>
     
        <h2 className={'H2'}>
         To Do List

        </h2>
        <Head/>
       
      
    </div>
  );
  }
}

export default App;
