import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, Text, View, Platform, Pressable } from 'react-native';
import React, { useState } from 'react';


export default function App() {

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate || date;
    setDate(currentDate)
  }

  const toggle = () => {
    setShow(prevShow => !prevShow);
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={toggle}>
          <Text>
            {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
          </Text>
      </Pressable>
        {show && Platform.OS === 'ios' && (
          <DateTimePicker
            style={{width: 320}}
            mode={'date'}
            display="inline"
            value={date}
            onChange={onChange}
          />
        )}
      {show && Platform.OS === 'android' && (
        <DateTimePicker
          mode={'date'}
          display="inline"
          value={date}
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
