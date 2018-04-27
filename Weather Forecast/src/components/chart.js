// This should be a component not a container as this component doesn't need
// to talk to the Redux system

// Also this component should be a functional component as it doesnt need to
// maintain any state

import React from 'react';
// Sparlines - for actually building the graph
// SparklinesLine - for adding color to the graph
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(numList){
  // Use helper function from lodash
  return _.round(_.sum(numList) / numList.length);
}

export default (props) => {
  return(
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </div>
  );
}
