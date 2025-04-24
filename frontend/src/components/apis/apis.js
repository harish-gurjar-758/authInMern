import axios from 'axios';

const baseURL = 'http://localhost:5000/apis'; // Ensure the correct URL for your backend

// Sign Up
export const SignUp = async (userData) => {
  try {
    const response = await axios.post(`${baseURL}/users`, userData);
    return response.data;
  } catch (error) {
    throw error; // Propagate the error for handling in the component
  }
};

// Log In
export const LogInUser = async (userData) => {
  try {
    const response = await axios.post(`${baseURL}/auth`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
