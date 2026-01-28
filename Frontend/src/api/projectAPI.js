import api from './axios';

export const getAllProjects = async () => {
  const response = await api.get('/api/projects');
  return response.data; // { success, data }
};
