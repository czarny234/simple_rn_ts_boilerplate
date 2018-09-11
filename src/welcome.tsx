import * as React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

type Props = {};

class Welcome extends React.Component<Props> {
  render() {
    return (
      <View>
        <Text>Welcome to React Native with TypeScript!</Text>
        <Text>To get started, edit App.js</Text>
        <Button
          title="Info"
          onPress={() => {
            Actions.push('scene.info');
          }}
        />
      </View>
    );
  }
}

export default Welcome;
