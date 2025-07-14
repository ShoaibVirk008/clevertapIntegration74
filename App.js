import {StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
const CleverTap = require('clevertap-react-native');
function App() {
  const trackEvent = (eventName, eventData) => {
    try {
      console.log('trackEvent triggered');
      CleverTap.recordEvent('Product Viewed', {
        'Product Name': 'Dairy Milk',
        Category: 'Chocolate',
        Amount: 20.0,
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
        Name: 'React-Test',
        Identity: '11102008',
        Email: 'r@gmail.com',
        custom1: 43,
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
