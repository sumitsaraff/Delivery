import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

class Help extends Component {
  render() {
    return (
      <View>
        <Text>help</Text>
      </View>
    );
  }
}

export default connect(null)(Help);
