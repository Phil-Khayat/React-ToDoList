import logo from './logo.svg';
import './Item.css';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons' 
// import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
// import { faSolid, faTrashCan } from '@fortawesome/fontawesome-free-solid'

class Item extends Component {
  constructor(props) {
      super(props);
      this.state = {
      item: this.props.itemRow,
    };
  }
  
  render() {
  return (
    <div className="Item">
        {/* <span>{this.props.itemRow.id} : {this.props.itemRow.valueText}</span> */}
        <span className="item-text">{this.props.itemRow.valueText}</span>
        {/* <FontAwesomeIcon icon="fa-solid fa-trash-can" /> */}
        {/* <FontAwesomeIcon icon={solid('fa-trash-can')} /> */}
        <a onClick={() => this.props.onDelete(this.props.itemRow.id)}><FontAwesomeIcon id="trash" icon={faTrash} /> </a>
        {/* <FontAwesomeIcon icon={faTrashCan} /> */}
        {/* <button onClick={() => this.props.onDelete(this.props.itemRow.id)}>Effacer</button> */}
    </div>
  );
  }
}

export default Item;