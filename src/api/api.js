import axios from "axios";

const urls = {
  development: "http://localhost:8080",
  production: "https://personal-diary-app-backend.herokuapp.com/api",
};

const baseURL = urls[process.env.NODE_ENV];

export default axios.create({ baseURL });
