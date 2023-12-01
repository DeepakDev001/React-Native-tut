import { ImageBackground, StyleSheet, View } from 'react-native';
import ReactStyle from './components/ReactStyle';
import ListView from './components/ListView';
import NativeRespGrid from './components/NativeRespGrid';

export default function App() {
  const image = { uri: 'https://img.freepik.com/free-/blue-fluid-background-frame_53876-99019.jpg?size=626&ext=jpg' };
  return (
    <View style={styles.container}>
      <ListView />
      {/* <NativeRespGrid /> */}
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image} >
        <ReactStyle />
      </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
