import React, {useState } from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import { images } from './utils/images';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga';
import rootReducer from './redux/reducers';
import MainNavigator from './navigations/Main';

const sagaMiddleware = createSagaMiddleWare();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

const cacheImages = images => {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  };
  const cacheFonts = fonts => {
    return fonts.map(font => Font.loadAsync(font));
  };

  const App = () => {
    const [isReady, setIsReady] = useState(false);
    const _loadAssets = async () => {
      const imageAssets = cacheImages([
        require('../assets/splash.png'),
        ...Object.values(images),
      ]);
      const fontAssets = cacheFonts([]);  
      await Promise.all([...imageAssets, ...fontAssets]);
    };
    
      return isReady?(
        <ThemeProvider theme={theme}>
            <StatusBar barStyle="dark-content" />
            <Provider store={store}>
              <MainNavigator/>
            </Provider>
       </ThemeProvider>
      ):(
        <AppLoading
             startAsync={_loadAssets}
             onFinish={() => setIsReady(true)}
             onError={console.warn}
        />
      );
  };

  export default App;