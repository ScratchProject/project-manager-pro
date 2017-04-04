import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';

class Progress extends Component {
  render() {
    return (
     <div className="prog-container">
       <CircularProgressbar className="prog-circle" strokeWidth={6} percentage={Math.floor(this.props.percentComplete*100)} />
     </div>
   );
  }
}

export default Progress;
