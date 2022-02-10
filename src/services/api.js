import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
});

// Request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("@citizen:access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${JSON.parse(token)}`; // eslint-disable-line no-param-reassign
  }
  return config;
});

// Response interceptor
// api.interceptors.response.use(
//   (response) => {
//     // Qualquer código de status que esteja dentro de 2xx fará com que essa função seja acionada
//     // Faça algo com os dados de resposta
//     return response;
//   },
//   (error) => {
//     // Quaisquer códigos de status que estejam fora de 2xx fazem com que esta função seja acionada
//     // Faça algo com erro de resposta
//     return Promise.reject(error);
//   }
// );

export default api;
