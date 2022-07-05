import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React,{useEffect} from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './src/store/reducers';
import { COLORS } from './src/constants';
import MainNavigator from './src/navigation/MainNavigator';
// import AuthProvider from './src/context/AuthContext';

const App = ({}) => {

  return (
    // <AuthProvider>
        <View style={styles.container}>
          <StatusBar 
                  barStyle='light-content'
                  backgroundColor={COLORS.headerColor}
          />
           <PersistGate loading={null} persistor={persistor}>
                <MainNavigator />
            </PersistGate>
        </View>
    // </AuthProvider>
  )
}

export default App;

const styles = StyleSheet.create({
  container : {
    flex : 1,
  }
});