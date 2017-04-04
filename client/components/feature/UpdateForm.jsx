import React, { Component } from 'react';
import Item from './Item.jsx';

// need a list of tasks
// need access to duration

const UpdateForm = (props) => {
  console.log('-----------------REMOVEITEM--------------', props.removeItem);
  const items = [];
  props.featItems.forEach((item, i) => {
    items.push(<Item key={i} myID={item.id} description={item.content} complete={item.complete} featID={item.featureId} remove={props.removeItem}/>)
  })

  return (
    <div>
    {items}
    <button>Update All</button>
    </div>
  );
}

export default UpdateForm;
