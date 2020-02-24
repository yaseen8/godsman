import React from 'react';
import Router from './src/routes';
import {Provider} from 'react-redux';
import store from './src/app/redux';

// import firebase from './src/firebase/firebase';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
