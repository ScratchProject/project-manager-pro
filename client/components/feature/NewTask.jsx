import React, { Component } from 'react';

const NewTask = (props) => {

  return (
    <div className="new-task">
      <form className="update-form" action={`/api/features/${props.featID.id}/items`} method="post">
        <input name="content" type="text"/>
        <input className="update-form-button" type="submit" value="Add Task"/>
      </form>
    </div>
  )
}

export default NewTask;
