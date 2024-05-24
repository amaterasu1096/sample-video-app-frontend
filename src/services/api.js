import axios from 'axios';

const API_URL = 'http://localhost:3001';
const token = localStorage.getItem('token');
const headers = { 'Authorization': `Bearer ${token}` }

export const authentication = async (email, password) => {
  return axios.post(`${API_URL}/api/v1/authenticate`, { email, password });
};

export const fetchVideos = async (page) => {
  return axios.get(`${API_URL}/api/v1/videos`, {
    params: { page },
    headers
  });
};

export const shareVideo = async (video_url) => {
  return axios.post(`${API_URL}/api/v1/share_video`, { video_url }, { headers });
};

export const voteVideo = async (video_id, vote_type) => {
  return axios.post(`${API_URL}/api/v1/videos/${video_id}/vote`, { video_id, vote_type }, { headers });
};
