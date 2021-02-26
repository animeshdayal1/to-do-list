import React,{Component} from 'react';
import './Head.css';
import List from '../../container/List/List';
import UserInput from '../../container/UserInput/UserInput';


class Head extends Component{

    state={
        task:'',
        list: [],
    }


    onChangeHandler=(e)=>{
        this.setState({
            task:  e.target.value
        })
    }
    onClickHandler=()=>{
     this.setState({
         list: this.listItem()
     })
     this.setState({
        task: ''
    })
    }
   
    listItem=()=>[...this.state.list , this.state.task]

    deleteList=(listIndex)=> {
        const list=this.state.list;
        list.splice(listIndex ,1);
        this.setState({list:list})
    }

    

    render() {
        return(

            <div>

              <UserInput
              onChangeHandler={this.onChangeHandler}
              onClickHandler={this.onClickHandler}
              task ={this.state.task} 

               />

             <List
                 list={this.state.list}
                 deleteList = {this.deleteList}

             />

            </div>
        )
    }

};


export default Head;

