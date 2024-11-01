// src/sagas/jobSaga.js
import { call, put, takeEvery, delay } from 'redux-saga/effects';

function* fetchJobs() {
  try {
    const response = yield call(fetch, 'https://66f5fdd4436827ced975a180.mockapi.io/api/v1/weeek7');
    if (!response.ok) {
      const errorText = yield response.text();
      throw new Error(errorText);
    }
    const jobs = yield response.json();
    yield put({ type: 'SET_JOBS', payload: jobs });
  } catch (error) {
    console.error('Error fetching jobs:', error.message);
    yield put({ type: 'FETCH_JOBS_ERROR', payload: error.message });
  }
}

function* addJob(action) {
  const { jobName } = action.payload;
  const maxRetries = 3;
  let attempts = 0;

  while (attempts < maxRetries) {
    try {
      const response = yield call(fetch, 'https://66f5fdd4436827ced975a180.mockapi.io/api/v1/weeek7', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: jobName }),
      });

      if (!response.ok) {
        const errorText = yield response.text();
        if (response.status === 429) { // Handle rate limiting
          attempts++;
          yield delay(1000 * Math.pow(2, attempts)); // Exponential backoff
          continue; // Retry the request
        }
        throw new Error(errorText);
      }

      const newJob = yield response.json();
      yield put({ type: 'ADD_JOB', payload: newJob });
      break; // Exit loop on success
    } catch (error) {
      console.error('Error adding job:', error.message);
      yield put({ type: 'ADD_JOB_ERROR', payload: error.message });
      break; // Exit loop on failure
    }
  }
}

function* updateJob(action) {
  const { jobId, jobName } = action.payload;
  try {
    const response = yield call(fetch, `https://66f5fdd4436827ced975a180.mockapi.io/api/v1/weeek7/${jobId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: jobName }), 
    });

    if (!response.ok) {
      const errorText = yield response.text();
      throw new Error(errorText); 
    }

    const updatedJob = yield response.json();
    yield put({ type: 'UPDATE_JOB', payload: updatedJob });
  } catch (error) {
    console.error('Error updating job:', error.message);
    yield put({ type: 'UPDATE_JOB_ERROR', payload: error.message });
  }
}

export default function* jobSaga() {
  yield takeEvery('FETCH_JOBS', fetchJobs);
  yield takeEvery('ADD_JOB', addJob);
  yield takeEvery('UPDATE_JOB', updateJob);
}
