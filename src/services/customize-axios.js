import axios from "axios";


const instance = axios.create({
  // withCredentials: true, 
  baseURL: 'http://localhost:8080/',
});

// instance.defaults.withCredentials = true;

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data ? response.data : {statusCode: response.status}
  }, function (error) {
    let res = {};
    if (error.response) {
      res.data = error.response.data;
      res.status = error.response.status;
      res.headers = error.response.headers;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error: ', error.message);
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // return Promise.reject(error);
    return res;
  });



export default instance;
