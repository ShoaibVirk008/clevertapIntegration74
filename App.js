import {useEffect} from 'react';
import {StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
const CleverTap = require('clevertap-react-native');
function App() {
  useEffect(() => {
    CleverTap.addListener(
      CleverTap.CleverTapInAppNotificationButtonTapped,
      event => {
        _handleCleverTapEvent(
          CleverTap.CleverTapInAppNotificationButtonTapped,
          event,
        );
      },
    );
  }, []);
  function _handleCleverTapEvent(eventName, event) {
    console.log('CleverTap Event called - ', eventName, event);
  }
  const trackEvent = (eventName, eventData) => {
    try {
      console.log('trackEvent triggered');
      CleverTap.recordEvent('Product Viewed', {
        'Product Name': 'Lays',
        Category: 'Chips',
        Amount: 50.0,
      });
      console.log('trackEvent success');
    } catch (error) {
      console.log('trackEvent error: ', error);
    }
  };

  const trackUser = () => {
    try {
      console.log('trackUser triggered');
      CleverTap.onUserLogin({
        Name: '3453545345-Test',
        Identity: '3453545345',
        Email: '3453545345@gmail.com',
        custom1: 3453545345,
      });
      console.log('trackUser success');
    } catch (error) {
      console.log('trackUser error: ', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text onPress={trackEvent}>Track Event</Text>
      <View style={{height: 30}} />
      <Text onPress={trackUser}>Track User</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
