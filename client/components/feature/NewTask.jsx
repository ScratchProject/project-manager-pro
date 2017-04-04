import React, { Component } from 'react';

const NewTask = (props) => {

  return (
    <form action={`/api/features/${props.featID.id}/items`} method="post">
      <input name="content" type="text"/>
      <input className="update-form-button" type="submit" value="Add Task"/>
    </form>
  )
}

export default NewTask;
