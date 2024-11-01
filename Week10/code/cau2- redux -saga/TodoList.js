import React, { useEffect } from 'react';
import { View, Text, ScrollView, Button, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

export default function TodoList({ navigation }) {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.job.jobs);

  useEffect(() => {
    dispatch({ type: 'FETCH_JOBS' });
  }, [dispatch]);

  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1, padding: 16 }} 
      showsVerticalScrollIndicator={true} // Hiển thị thanh cuộn
    >
      <Button title="Add Job" onPress={() => navigation.navigate('AddOrUpdateJob')} />
      {jobs.length > 0 ? ( 
        jobs.map((item) => (
          <TouchableOpacity 
            key={item.id}
            onPress={() => navigation.navigate('AddOrUpdateJob', { jobId: item.id, jobName: item.name })}
            style={{
              padding: 12, 
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
            }}
          >
            <Text style={{ fontSize: 16 }}>{item.name}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>No jobs available</Text>
      )}
    </ScrollView>
  );
}
