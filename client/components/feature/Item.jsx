import React, { Component } from 'react';

//remove button places delete request to:  '/api/features/:featureId/items/:featureItemId'

const Item = (props) => {
  console.log('--------------PROPS.REMOVE------------', props.remove);
  return (
    <div>
      <form>
        <input type="text" value={props.description}/>
        <input id={`${props.myID}`} type="checkbox" name="complete" value="true"/>
        <label>Complete</label>
      </form>
      <button onClick={() => {props.remove(props.featID, props.myID)}}>Remove Task</button>
    </div>
  );
}

export default Item;
