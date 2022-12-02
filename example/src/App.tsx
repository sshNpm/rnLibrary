/*
 * @Author: si shaohua
 * @Date: 2022-12-01 15:52:05
 * @LastEditors: si shaohua
 * @LastEditTime: 2022-12-01 16:13:05
 * @Description: file content
 */
import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-demo-library';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {

  }, []);

  return (
    <View style={styles.container}>
      <Button title='点击我好了' />
      <View>
        <TextInput />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
