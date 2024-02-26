import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Home} from './src/screens';
import ThemeProvider from './src/Theme';
import {Colors} from './src/colors';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };

  return (
    <ThemeProvider>
      {/* Safe area view to ensure content is visible on all devices */}
      <SafeAreaView style={styles.safeAreaStyle}>
        {/* StatusBar to control the appearance of the status bar */}
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        {/* Home screen component */}
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaStyle: {flex: 1},
});
