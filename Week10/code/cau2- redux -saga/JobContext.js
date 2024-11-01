// JobContext.js
import React, { createContext, useState, useEffect } from 'react';

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  // Fetch công việc từ API
  const fetchJobs = async () => { 
    try {
      const response = await fetch('https://66f5fdd4436827ced975a180.mockapi.io/api/v1/weeek7');
      const result = await response.json();
      setJobs(result);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <JobContext.Provider value={{ jobs, setJobs, fetchJobs }}>
      {children}
    </JobContext.Provider>
  );
};
