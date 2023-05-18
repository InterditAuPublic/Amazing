import * as React from 'react';
import Splash from './src/screens/Splash';
import Presentation from './src/screens/Presentation';
import Home from './src/screens/Home';

const App = () => {
  const [loading, setLoading] = React.useState(true);
  return loading ? <Splash setLoading={setLoading} /> : <Presentation />;
};

export default App;
