import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Rockets from './component/rockets';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Rockets />
    </Provider>
  );
};

export default App;
