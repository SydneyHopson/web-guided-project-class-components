import React from 'react';

const Item = props => {
  return (
    <div className={`item${props.item.purchased ? ' purchased' : ''}`}v
    // add onClick function to div to update if purchased or not 
    onClick={() => props.toggleItem(props.item.id)}
    
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;

