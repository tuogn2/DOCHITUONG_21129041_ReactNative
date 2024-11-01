import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';

export default function AddOrUpdateJob({ route, navigation }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(route.params?.jobName || '');
  const jobId = route.params?.jobId;

  const handleSaveJob = () => {
    if (jobId) {
      dispatch({ type: 'UPDATE_JOB', payload: { jobId, jobName: inputValue } });
    } else {
      dispatch({ type: 'ADD_JOB', payload: { jobName: inputValue } });
    }
    setInputValue('');
    navigation.navigate('TodoList');
  };

  return (
    <View>
      <Text>{jobId ? 'Update' : 'Add'} Job</Text>
      <TextInput
        placeholder="Enter job name"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title={jobId ? 'Update Job' : 'Add Job'} onPress={handleSaveJob} />
    </View>
  );
}
