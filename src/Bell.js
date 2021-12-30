import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Bell extends Component {
  state = {
    bellType: 'start',
    hasRung: false,
  }

  componentDidMount() {

  }

  render() {
    const { bellType, hasRung } = this.state;
  }
}
