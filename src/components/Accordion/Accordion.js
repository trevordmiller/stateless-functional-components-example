import React from 'react';
import {styles} from './styles';

class Accordion extends React.Component {

  constructor() {
    super();
    this.state = {
      active: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    const stateStyle = this.state.active ? styles.active : styles.inactive;
    return (
      <div styles={styles.container}>
        <a onClick={this.toggle} style={Object.assign(
            {},
            styles.link,
            styles.title,
            this.props.color ? {background: this.props.color} : {}
          )}>
          {this.props.summary}
        </a>
        <p style={Object.assign(
            {},
            styles.well,
            styles.trim,
            stateStyle,
            this.props.isOnDarkBackground ? {color: '#FFFFFF', background: 'rgba(0, 0, 0, .4)'} : {},
            this.props.hasBorder ? {} : {border: '0'}
          )}>
          {this.props.details}
        </p>
      </div>
    );
  }
}

Accordion.propTypes = {
  summary: React.PropTypes.string.isRequired,
  details: React.PropTypes.string.isRequired,
  color: React.PropTypes.string,
  isOnDarkBackground: React.PropTypes.bool,
  hasBorder: React.PropTypes.bool
};

export default Accordion;
