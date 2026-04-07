import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://mbhyn4didf.execute-api.us-east-2.amazonaws.com/stage/api-programs/POST',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
