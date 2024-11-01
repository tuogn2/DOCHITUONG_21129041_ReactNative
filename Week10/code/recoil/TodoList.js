// src/TodoList.js
import React, { useEffect } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { useRecoilState } from 'recoil';
import { jobsAtom } from './jobsAtom';

const TodoList = ({ navigation }) => {
  const [jobs, setJobs] = useRecoilState(jobsAtom); // Use Recoil state for jobs
  const [loading, setLoading] = React.useState(false); // Local loading state

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      const response = await fetch('https://66f5fdd4436827ced975a180.mockapi.io/api/v1/weeek7');
      const data = await response.json();
      setJobs(data); // Update Recoil state
      setLoading(false);
    };

    fetchJobs();
  }, [setJobs]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Show loading indicator while fetching
  }

  return (
    <View>
      <Text>Todo List</Text>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <View key={job.id}>
            <Text>{job.name}</Text>
            <Button 
              title="Edit" 
              onPress={() => navigation.navigate('AddOrUpdateJob', { jobId: job.id, jobName: job.name })} 
            />
          </View>
        ))
      ) : (
        <Text>No jobs available.</Text> // Message when no jobs are present
      )}
      <Button title="Add Job" onPress={() => navigation.navigate('AddOrUpdateJob')} />
    </View>
  );
};

export default TodoList;
