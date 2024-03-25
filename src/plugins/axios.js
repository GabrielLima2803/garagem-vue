import axios from "axios";

const api = axios.defaults.baseURL = "http://127.0.0.1:8000/api";
// axios.defaults.baseURL = "http://0.0.0.0:19003/api";
// axios.defaults.baseURL = "https://livraria-drf.herokuapp.com/api";

export default api;