// src/AddOrUpdateJob.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useRecoilState } from 'recoil';
import { jobsAtom } from './jobsAtom'; // Import the jobs atom

export default function AddOrUpdateJob({ route, navigation }) {
  const [jobs, setJobs] = useRecoilState(jobsAtom); // Use Recoil state for jobs
  const [inputValue, setInputValue] = useState(route.params?.jobName || '');
  const jobId = route.params?.jobId;

  const handleSaveJob = async () => {
    if (jobId) {
      // Update job
      try {
        const response = await fetch(`https://66f5fdd4436827ced975a180.mockapi.io/api/v1/weeek7/${jobId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: inputValue }),
        });

        if (!response.ok) {
          throw new Error('Failed to update job');
        }

        const updatedJob = await response.json();
        setJobs((prevJobs) =>
          prevJobs.map((job) => (job.id === jobId ? updatedJob : job))
        );
        Alert.alert('Success', 'Job updated successfully!');
      } catch (error) {
        Alert.alert('Error', error.message);
      }
    } else {
      // Add new job
      try {
        const response = await fetch('https://66f5fdd4436827ced975a180.mockapi.io/api/v1/weeek7', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: inputValue }),
        });

        if (!response.ok) {
          throw new Error('Failed to add job');
        }

        const newJob = await response.json();
        setJobs((prevJobs) => [...prevJobs, newJob]); // Update Recoil state with the new job
        Alert.alert('Success', 'Job added successfully!');
      } catch (error) {
        Alert.alert('Error', error.message); 
      } 
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
