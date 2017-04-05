import React, { Component } from 'react';

//remove button places delete request to:  '/api/features/:featureId/items/:featureItemId'

const Item = (props) => {
  function removal() {
    props.remove(props.index, props.featID, props.myID);
  }
  return (
    <div className="existing-task" taskNum={props.myID}>
      <form className="update-form" action={`/api/features/${props.featID}/items/${props.myID}`} method="post">
        <input type="text" defaultValue={props.description} name="content"/>
        <input type="checkbox" name="complete" value={true} defaultChecked={props.complete}/>
        <input type="hidden" name="complete" value={false}/>
        <label>Complete</label>
        <input className="update-form-button" type="submit" value="Update Task"/>
      </form>
      <button className="update-form-button" onClick={() => {props.remove(props.index, props.featID, props.myID)}}>Remove Task</button>
    </div>
  );
}

export default Item;
