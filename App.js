import { StyleSheet, Text, View } from 'react-native';
import Basics from './components/Basics';
import OnPressEvent from './components/OnPressEvent';
import ReactState from './components/ReactState';

export default function App() {
  return (
    <View style={styles.container}>
      <Basics />
      <OnPressEvent />
      <ReactState />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10
  },
});
