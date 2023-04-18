import axios from 'axios';
// import { API_NOSSA_DEFENSORIA } from "react-native-dotenv";

const api = axios.create({
  baseURL: 'https://nossa.defensoria.ce.def.br/',
  headers: {
    Accept: 'application/json',
  },
});

export default api;
