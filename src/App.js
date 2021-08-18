import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga';
import rootReducer from './redux/reducers';
import Registration from "./components/SignUp/Registration";
const sagaMiddleware = createSagaMiddleWare();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

const App = () => {
  return (
    <Provider store={store}>
      {/* <AppNav/> */}
      {/* <AppNavigator/> */}
      {/* <MyPage/> */}
      <Registration/>
    </Provider>
  );
};

export default App;