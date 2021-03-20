import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fruit from './fruit'

class App extends Component{

state = {
fruits:[{name:"Apple",price:"30"}],
value:''
}
deleteHandler = (index)=>{
const fruits = [...this.state.fruits]
fruits.splice(index,1)
this.setState({fruits:fruits})
}
addFruitHandler = (event)=>{
const val = this.state.value
const arr = val.split('-')
const fruits = [...this.state.fruits]
fruits.push({name:arr[0] ,price:arr[1]})
this.setState({fruits:fruits})
}
inputChangeHandler= (event) =>{
this.state.value = this.setState({value:event.target.value})
}
render(){
return(
<div className="App">
<input type="reset" defaultValue = ""onChange={this.inputChangeHandler}type="text" placeholder="Enter fruit and price"/>
<button onClick={this.addFruitHandler}>Submit</button>
<table>
<tr>
<th>NAME</th>
<th>PRICE</th>
</tr>
{this.state.fruits.map((fruit,index)=>{
return (<Fruit index={index} name={fruit.name} price={fruit.price} delete={()=>{this.deleteHandler(index)}}/>)
})}
</table>
</div>
)
}
}

export default App;
