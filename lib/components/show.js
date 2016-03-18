import React, { PropTypes, Component } from 'react'

export default class Show extends Component {
  static propTypes = {
    tumbnail : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    onClick : PropTypes.func.isRequired,
  }

  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}
