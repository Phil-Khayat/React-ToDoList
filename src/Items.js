import logo from './logo.svg';
import './Items.css';
import Item from './Item';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';


class Items extends Component {
  constructor() {
      super();
      this.state = {
      itemsList: [],
      myInputValue: ""
    };
  }
  
  handleAddItem = () => {
    if (this.state.myInputValue == "") {
        alert ("Vous devez rentrer un texte de Tâche !")
        return;
    }

    if (this.state.itemsList.find( x => x.valueText == this.state.myInputValue)) {
        alert ("La tâche " + this.state.myInputValue + " existe déjà dans la Todo List !")
        return;
    }

    this.setState( { itemsList: [...this.state.itemsList, {id: uuidv4(), valueText :this.state.myInputValue}], myInputValue: "" } ) // addItem on itemsList
  };

  handleDelete = (id) => {
    const newItemList = this.state.itemsList.filter( (x) => x.id != id);
    this.setState({itemsList: newItemList});
  }

  render() {
    // console.log(this.state.itemsList);
  return (
    <div>
        <div>
            <input type="text"
                value={this.state.myInputValue}
                onChange={event => this.setState({myInputValue: event.target.value})}
                placeholder="Renseignez un Item"
            ></input> 
            {/* <button id="add-item" onClick={this.handleAddItem}>Add Task</button> */}
            <a id="add-item" onClick={this.handleAddItem}>Add Task</a>
        </div>
       
        { this.state.itemsList.map( (item) => (
            <Item key={item.id} itemRow={item} onDelete={this.handleDelete} indexArray={this.state.itemsList.indexOf(item)+1}></Item>
        ))}
              
    </div>
    );
    }

}

export default Items;