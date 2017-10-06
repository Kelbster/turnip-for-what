import React from 'react';
import classNames from 'classnames';
require('./plot.scss');

export default class Plot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plant: null,
      plantable: true,
      numTurnips: 0,
      numPotatoes: 0
     };
  };

  handlePlanting() {
    if (!this.state.plantable) { return }
    else {
      this.setState (
        {
          plant: this.props.plantSelected,
          plantable: false
        }
      );
    }
  }

  render () {
    const plantClass = classNames(this.state.plant, {
      'crop': !this.state.plantable
    });

    return (
      <div className={ this.state.plantable ? 'plot' : 'plot planted' } onClick={ () => this.handlePlanting() }>
        <span className="popper">{ this.state.plant }</span>
        <div className={ plantClass } />
      </div>
    )
  }
};
