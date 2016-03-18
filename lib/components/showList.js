import React, { PropTypes, Component } from 'react'

export default class ShowList extends Component {
  static propTypes = {
    
  }

  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}
