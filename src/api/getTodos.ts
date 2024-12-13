import axios from "axios";

export const getTodos = async () => {
  try {
    const response = await axios.get("http://94.74.86.174:8080/api/checklist");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
