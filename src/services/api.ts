import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/photos";

export const getTasks = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    throw error;
  }
};