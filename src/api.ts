import axios from 'axios';

const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_THEGATE_API_URL || "https://mbhyn4didf.execute-api.us-east-2.amazonaws.com/stage"}/api-programs/POST`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
