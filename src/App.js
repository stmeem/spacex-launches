import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import RocketLists from './component/rocketLists';
import {Header} from './component/header';
import {Home} from './component/home';
const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <Home/>
      <RocketLists/>
    </Provider>
  );
};

export default App;
