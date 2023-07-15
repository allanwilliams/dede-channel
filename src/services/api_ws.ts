import axios from 'axios';
// import { API_NOSSA_DEFENSORIA } from "react-native-dotenv";

const apiWs = axios.create({
  //baseURL: 'https://nossa.defensoria.ce.def.br/',
  baseURL: 'http://localhost:3000/',
  headers: {
    Accept: 'application/json',
  },
});

export default apiWs;
