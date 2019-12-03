import React, {FC} from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';

type Props = {
  image: string;
  user: {
    username: string;
    location: string;
  };
  title: string;
};
const Card: FC<Props> = ({user: {username, location}, image, title}) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text>{username}</Text>
      <Text>{location}</Text>
    </View>
    <Image
      style={styles.image}
      source={{
        uri: image,
      }}
    />
    <View style={styles.header}>
      <Text>{title}</Text>
    </View>
  </View>
);
Card.defaultProps = {
  image:
    'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
  user: {
    username: 'Fade zeft',
    location: 'ew',
  },
  title: 'meee',
};
const styles = StyleSheet.create({
  container: {
    height: 300,
  },
  header: {
    height: '12%',
    backgroundColor: 'white',
  },
  image: {
    height: '80%',
  },
});
export default Card;
