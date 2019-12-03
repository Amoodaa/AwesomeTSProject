import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Iconic from 'react-native-vector-icons/Ionicons';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  FlatList,
} from 'react-native';
import Card from './components';

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <View style={styles.header}>
        <Icon name="camera" size={30} color="#900" />
        <Iconic name="ios-send" size={30} color="#900" />
      </View>
      <FlatList
        style={styles.list}
        data={Array(20).fill('zeft')}
        renderItem={() => <Card />}
        keyExtractor={(e, i) => `${e}${i}`}
      />
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 6,
  },
  list: {
    backgroundColor: 'teal',
  },
  bar: {
    flex: 1,
  },
});

export default App;
