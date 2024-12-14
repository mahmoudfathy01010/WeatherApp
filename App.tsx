import React from 'react';

import AppNavigation from 'App/Containers/AppNavigation/AppNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
  );
}

export default App;
