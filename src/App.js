import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Rockets from './component/rockets';
import {Header} from './component/header';

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <Rockets />
    </Provider>
  );
};

export default App;
