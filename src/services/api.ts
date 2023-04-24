import axios from 'axios';
// import { API_NOSSA_DEFENSORIA } from "react-native-dotenv";

const api = axios.create({
  //baseURL: 'https://nossa.defensoria.ce.def.br/',
  baseURL: 'http://localhost:8000/',
  headers: {
    Accept: 'application/json',
  },
});

export default api;
