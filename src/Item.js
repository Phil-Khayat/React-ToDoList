import logo from './logo.svg';
import './Item.css';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons' 

function Item ({indexArray, itemRow, onDelete}) {

  return (
    <div className="Item">        
        <span className="item-text">{indexArray} : {itemRow.valueText}</span>
        <a id="trash" onClick={() => onDelete(itemRow.id)}><FontAwesomeIcon icon={faTrash} /> </a>
    </div>
  );
}

export default Item;