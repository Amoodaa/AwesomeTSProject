import React, {FC} from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';

type Props = {
  image?: string;
  user?: {
    username: string;
    location: string;
  };
  title?: string;
};

const Card: FC<Props> = ({user, image, title}) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.username_image}>
        <Image style={styles.username_image} source={{uri: image}} />
      </View>
      <View style={styles.username_info}>
        <Text>{user!.username}</Text>
        <Text>{user!.location}</Text>
      </View>
    </View>
    <Image
      style={styles.image}
      source={{
        uri: image,
      }}
    />
    <View>
      <Text>{title}</Text>
    </View>
  </View>
);

Card.defaultProps = {
  image:
    'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
  user: {
    username: 'Fade barker',
    location: 'ew',
  },
  title:
    'meee and he sat down to eat food and have fun but it wasnt so fun, jerry didnt do well that night',
};

const styles = StyleSheet.create({
  container: {
    height: 400,
  },
  image: {
    height: '80%',
  },
  header: {
    padding: 1,
    height: '12%',
    flexDirection: 'row',
  },
  username_image: {
    flexShrink: 1,
    width: 36,
    height: 36,
    borderRadius: 9999,
  },
  username_info: {
    flex: 1,
    width: 36,
    height: 36,
  },
});

export default Card;
