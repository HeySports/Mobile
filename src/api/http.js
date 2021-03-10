import axios from 'axios';

const API_ROOT = 'https://the-books-api-dev.enouvo.com/';

axios.defaults.baseURL = API_ROOT;
axios.defaults.timeout = 15000;

axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => response,
  (error) => handleError(error),
);

const handleError = (error) => {
  let dataCode = 'not_response';
  if (error.response) {
    const { code, message, data, status } = error.response;
    if (status === 401) {
      // dispatch logout
      // store.dispatch(logout());
    }
  }
  return Promise.reject(error.response || error.request || error.message);
};

function getHeaderAndContentType(extension) {
  let mimeType;
  if (extension.includes('jpg') || extension.includes('jpeg')) {
    mimeType = 'image/jpeg';
  }
  if (extension.includes('png')) {
    mimeType = 'image/png';
  }
  return mimeType;
}

const http = {
  setAuthorizationHeader(accessToken, language) {
    axios.defaults.headers.Authorization = `bearer ${accessToken}`;
    axios.defaults.headers['Accept-Language'] = language;
  },

  request(config = {}) {
    return axios.request(config);
  },
  get(url, config = {}) {
    console.log(url);

    return axios.get(url, config);
  },
  post(url, data = {}, config = {}) {
    console.log(url, data);

    return axios.post(url, data, config);
  },
  put(url, data = {}, config = {}) {
    console.log(url, data);

    return axios.put(url, data, config);
  },
  patch(url, data = {}, config = {}) {
    console.log(url, data);

    return axios.patch(url, data, config);
  },
  delete(url, config = {}) {
    console.log(url);

    return axios.delete(url, config);
  },
  postUploadFile(url, data = {}) {
    let formData = new FormData();
    data.photos.forEach((photo) => {
      formData.append('photos', {
        uri: photo,
        type: 'image/jpg',
        name: `${new Date().getTime()}.jpg`,
      });
    });

    return this.post(url, formData);
  },
  uploadFile(url, data) {
    let formData = new FormData();
    const extension = data.split('.').pop();
    const mimeType = getHeaderAndContentType(extension);
    formData.append('file', {
      uri: data,
      type: mimeType,
      name: `${new Date().getTime()}.jpg`,
    });

    return this.post(url, formData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default http;
