import axios from 'axios';

const baseURL = 'http://localhost:5500/api'; // Ensure the correct URL for your backend

export const SignUp = async (userData) => {
  try {
    const response = await axios.post(`${baseURL}/users`, userData);
    return response.data;
  } catch (error) {
    throw error; // Propagate the error for handling in the component
  }
};
