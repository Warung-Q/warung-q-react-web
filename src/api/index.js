import axios from "axios";

const server = axios.create({
  baseURL: "http://18.136.208.212:3000"
});

export default server;
