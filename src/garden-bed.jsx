import React from 'react';
import Plot from './plot';
require('./garden-bed.scss');

const GardenBed = (props) => (
  <div className="garden-bed-component">
    <div className="garden-bed-flex-container">
      <Plot plantSelected={ props.plantSelected }/>
      <Plot plantSelected={ props.plantSelected }/>
      <Plot plantSelected={ props.plantSelected }/>
      <Plot plantSelected={ props.plantSelected }/>
      <Plot plantSelected={ props.plantSelected }/>
      <Plot plantSelected={ props.plantSelected }/>
      <Plot plantSelected={ props.plantSelected }/>
      <Plot plantSelected={ props.plantSelected }/>
      <Plot plantSelected={ props.plantSelected }/>
    </div>
  </div>
);

export default GardenBed;
