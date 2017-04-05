import React, { Component } from 'react';
import Feature from './Feature.jsx';

class FeaturesCntr extends Component {
  render() {
    const featureArr = this.props.featuresArray.map((feature, index) => {
      let length = feature.featureItems.length;
      let complete = 0;
      feature.featureItems.forEach(task => {if (task.complete) complete += 1});
      let percent = length ? complete / length : 1;
      return <Feature key={index} percentComplete={percent} showUpdateForm={this.props.showUpdateForm} removeFeature={this.props.removeFeature} index={index} title={feature.title} deadline={feature.duration} elapsed={feature.elapsed}/>
    });
    return (
      <div id="features-ctnr">
        {featureArr}
      </div>
    );
  }
}

export default FeaturesCntr;
