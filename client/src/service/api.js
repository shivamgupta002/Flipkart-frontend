import axios from "axios";

const URL = "http://localhost:5000";
export const authenticateSignUp = async (data) => {
  try {
    return await axios.post(`${URL}/signUp`, data);
  } catch (e) {
    console.log("Error while signUp api", e.message);
  }
};
export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (e) {
    console.log("Error while Login api", e.message);
    return e.response;
  }
};
