import logo from './logo.svg';
// import './Items.css';
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
    //console.log(this.state.itemsList);
    // this.setState( { itemsList: [...this.state.itemsList, {id: this.state.itemsList.length, valueText :this.state.myInputValue}] } ) // addItem on itemsList
    this.setState( { itemsList: [...this.state.itemsList, {id: uuidv4(), valueText :this.state.myInputValue}] } ) // addItem on itemsList
    // this.state.myInputValue = "";
    this.setState({myInputValue: ""});
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
                onChange={e => this.setState({myInputValue: e.target.value})}
                placeholder="Renseignez un Item"
            ></input> 
            <button onClick={this.handleAddItem}>AJOUTER</button>
        </div>
       
        { this.state.itemsList.map( (item) => (
            <Item key={item.id} itemRow={item} onDelete={this.handleDelete}></Item>
        ))}
              
    </div>
    );
    }

}

export default Items;