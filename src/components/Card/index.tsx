import React, {FC} from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';

type Props = {
  image?: string;
};
const Card: FC<Props> = ({image}) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text>a</Text>
    </View>
    <Image
      style={styles.image}
      source={{
        uri: image,
      }}
    />
  </View>
);
Card.defaultProps = {
  image:
    'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
};
const styles = StyleSheet.create({
  container: {
    width: 200,
  },
  header: {
    flex: 1,
  },
  image: {
    height: '100%',
  },
});
export default Card;
