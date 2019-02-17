import React from 'react';
import {
  Diagram,
  store as diagramStore,
  setEntities,
  setConfig,
  diagramOn,
} from 'react-flow-diagram';
// import model from './model-example';
import { config, customEntities } from './config-example';

class CustomDiagram extends React.PureComponent {

  constructor(props) {
      super(props);
      console.log(this.props)
  } 

  componentWillMount() {
    diagramStore.dispatch(setConfig(config));
    diagramStore.dispatch(setEntities(this.props.model));

    diagramOn('anyChange', entityState =>
      // You can get the model back
      // after modifying the UI representation
      this.props.handleGraphUpdate(entityState)

    );
  }


  render() {
    return <Diagram className="Diagram" customEntities={customEntities}/>;
  }

}

export default CustomDiagram;
