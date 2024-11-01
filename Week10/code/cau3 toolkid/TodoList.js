// src/TodoList.js
import React, { useEffect } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from './features/jobSlice';

const TodoList = ({ navigation }) => {
  const dispatch = useDispatch();
  const { jobs, loading } = useSelector((state) => state.jobs); // Include loading state

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Show loading indicator while fetching
  }
 
  return (
    <View>
      <Text>Todo List</Text>
      {jobs.length > 0 ? ( // Check if there are jobs to display
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
