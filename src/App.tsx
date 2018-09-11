import * as React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Welcome from './welcome';
import Info from './info';

type Props = {};

class App extends React.Component<Props> {
  render() {
    return (
      <Router>
        <Stack>
          <Scene key="scene.welcome" title="Welcome" component={Welcome} />
          <Scene key="scene.info" title="Info" component={Info} />
        </Stack>
      </Router>
    );
  }
}

export default App;
