import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import RocketLists from './component/rocketLists';
import {Header} from './component/header';
import {Home} from './component/home';
import {Footer} from './component/footer';

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <Home/>
      <RocketLists/>
      <Footer/>
    </Provider>
  );
};

export default App;
