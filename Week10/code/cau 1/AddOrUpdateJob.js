// AddOrUpdateJob.js
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { JobContext } from './JobContext';

export default function AddOrUpdateJob({ route, navigation }) {
  const { jobs, setJobs } = useContext(JobContext);
  const [inputValue, setInputValue] = useState(route.params?.jobName || '');
  const jobId = route.params?.jobId;

  const handleSaveJob = async () => {
    const apiUrl = jobId
      ? `https://66f5fdd4436827ced975a180.mockapi.io/api/v1/weeek7/${jobId}`
      : `https://66f5fdd4436827ced975a180.mockapi.io/api/v1/weeek7`;

    const method = jobId ? 'PUT' : 'POST';
    const requestOptions = {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: inputValue }),
    };

    try {
      const response = await fetch(apiUrl, requestOptions);
      const updatedJob = await response.json();

      // Cập nhật danh sách công việc
      if (jobId) {
        setJobs((prevJobs) => prevJobs.map((job) => (job.id === jobId ? updatedJob : job)));
      } else {
        setJobs((prevJobs) => [...prevJobs, updatedJob]);
      }

      setInputValue('');
      navigation.navigate('TodoList');
    } catch (error) { 
      console.error('Error saving job:', error);
    }
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
