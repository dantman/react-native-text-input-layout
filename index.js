'use strict';

import React, {
  Component,
  PropTypes
} from 'react';
import {
  requireNativeComponent,
  StyleSheet,
  Text,
} from 'react-native';

const RNTextInputLayout = requireNativeComponent('RNTextInputLayout', null);

class TextInputLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <RNTextInputLayout {...this.props} />
    );
  }
}

var styles = {

}


module.exports = TextInputLayout;