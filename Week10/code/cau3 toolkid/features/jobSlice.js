// src/features/jobSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch jobs
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const response = await fetch('https://66f5fdd4436827ced975a180.mockapi.io/api/v1/weeek7');
  return response.json(); // Return the JSON response
});

// Async thunk to add a job
export const addJob = createAsyncThunk('jobs/addJob', async (jobData) => {
  const response = await fetch('https://66f5fdd4436827ced975a180.mockapi.io/api/v1/weeek7', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(jobData), // Use jobData for more flexibility
  });
  return response.json(); // Return the JSON response
});

// Async thunk to update a job
export const updateJob = createAsyncThunk('jobs/updateJob', async ({ jobId, jobData }) => {
  const response = await fetch(`https://66f5fdd4436827ced975a180.mockapi.io/api/v1/weeek7/${jobId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(jobData), // Pass jobData to update
  });
  return response.json(); // Return the JSON response
});

// Create a slice of the store
const jobSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true; // Set loading state to true when fetching
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false; // Set loading state to false when fetching is complete
        state.jobs = action.payload; // Update jobs with fetched data
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false; // Set loading state to false on error
        state.error = action.error.message; // Set error message
      })
      .addCase(addJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload); // Add the new job to the jobs array
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        const index = state.jobs.findIndex(job => job.id === action.payload.id); // Find the job by ID
        if (index !== -1) {
          state.jobs[index] = action.payload; // Update the existing job
        }
      });
  },
}); 

export const { } = jobSlice.actions; // No additional actions defined

// Export the reducer as default
export default jobSlice.reducer;
