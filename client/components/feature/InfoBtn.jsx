import React, { Component } from 'react';

//create a function for onClick.
//onClick should create a popup with all of the projects relevant information
//



class InfoBtn extends Component {
  render() {
    return (
     <div className="info-btn">
       <button type="button" className="update-btn" onClick={() => {this.props.showUpdateForm(this.props.index)}}>Update Info</button>
     </div>
   );
  }
}

export default InfoBtn;
