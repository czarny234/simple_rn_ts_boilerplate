import * as React from 'react';
import { View, Text } from 'react-native';

type Props = {};

export default class Info extends React.Component<Props> {
  componentDidAppear() {
    console.log('Info - componentDidAppear');
  }

  render() {
    return (
      <View>
        <Text>Info Page</Text>
      </View>
    );
  }
}
