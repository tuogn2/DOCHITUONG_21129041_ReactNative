// src/AddOrUpdateJob.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addJob, updateJob } from './features/jobSlice'; // Import the addJob and updateJob actions

export default function AddOrUpdateJob({ route, navigation }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(route.params?.jobName || '');
  const jobId = route.params?.jobId;

  const handleSaveJob = () => {
    if (jobId) {
      // Dispatch the updateJob action if jobId exists
      dispatch(updateJob({ jobId, jobData: { name: inputValue } }));
    } else {
      // Dispatch the addJob action if jobId does not exist
      dispatch(addJob({ name: inputValue })); // Update to pass an object with name
    }
    setInputValue(''); // Clear input field
    navigation.navigate('TodoList'); // Navigate back to TodoList
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
