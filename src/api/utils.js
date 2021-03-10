import _ from 'lodash';
import { Platform } from 'react-native';

// import { store } from '../Setup';
let store = null;
const checkIfErrorOccurs = (res) => {
  return {
    code: res.status,
    res,
  };
};

const TIME_OUT = 10000;

async function xfetch(path, headerOptions, ops = { noParse: false }) {
  const normalFetch = fetch(path, headerOptions);
  if (ops.noParse) {
    return timeoutPromise(TIME_OUT, normalFetch);
  }
  const res = await timeoutPromise(TIME_OUT, normalFetch.then(checkIfErrorOccurs));

  if (res.code === 401) {
    const err = {
      code: res.code,
      message: '',
    };
    throw err;
  } else {
    if (res.code < 300) {
      if (res.code === 204) {
        return { success: true };
      }
      const response = await res.res.json();
      return response;
    }
    try {
      const response = await res.res.json();
      const err = {
        code: res.code,
        message: response.message,
        data: response.data,
      };
      throw err;
    } catch (e) {
      if (res.code === 426) {
        const err = {
          code: res.code,
          message:
            'We have had some significant upgrades for the app. Please click below to upgrade your app!',
        };
        throw err;
      } else if (e.code === 401) {
        throw {
          code: e.code,
          message: e.message ? e.message : null,
        };
      } else {
        const err = {
          code: res.code,
          message: e.message ? e.message : 'Something wrong. Please try again.',
          data: e.data,
        };
        throw err;
      }
    }
  }
}

export const timeoutPromise = function timeoutPromise(ms, promise) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error('Request time out! Please try again.'));
    }, ms);
    promise.then(
      (res) => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      (err) => {
        clearTimeout(timeoutId);
        reject(err);
      },
    );
  });
};

export default xfetch;

function requestWrapper(method) {
  return async (_url, _data = null, _params = {}) => {
    let url = _url;
    let data = _data;
    let params = _params;
    url = 'https://the-books-api-staging.enouvo.com' + url;
    if (method === 'GET') {
      // is it a GET?
      // GET doesn't have data
      params = data;
      if (params !== null) {
        url = `${url}?${getQueryString(params)}`;
      }
      data = null;
    } else if (data === Object(data)) {
      // (data === Object(data)) === _.isObject(data)
      data = JSON.stringify(data);
    }

    // Accountant remote Client
    if (store.getState().user.remoteClient) {
      if (!_.includes(url, '?')) {
        url = `${url}?userId=${store.getState().user.data.id}`;
      } else {
        url = `${url}&userId=${store.getState().user.data.id}`;
      }
    }

    // default params for fetch = method + (Content-Type)
    const defaults = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    // check that req url is relative and request was sent to our domain
    let token = null;
    if (store) {
      token = store.getState().user.accessToken;
    }
    if (token) {
      defaults.headers.Authorization = `Bearer ${token}`;
    }

    defaults.headers.Platform = Platform.OS === 'ios' ? 'ios' : 'android';
    defaults.headers['Cache-Control'] = 'no-cache';

    // defaults.headers.Platform = Platform.OS === 'ios' ? 'ios' : 'android';
    // defaults.headers.VersionNo = '1.0.350';

    if (data) {
      defaults.body = data;
    }

    const paramsObj = {
      ...defaults,
      headers: { ...params, ...defaults.headers },
    };
    console.log(url);
    console.log(paramsObj);

    // console.log(url, paramsObj);
    return xfetch(url, paramsObj);
  };
}

function getQueryString(params) {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .map((k) => `${esc(k)}=${esc(params[k])}`)
    .join('&');
}

export const get = requestWrapper('GET');
export const post = requestWrapper('POST');
export const put = requestWrapper('PUT');
export const patch = requestWrapper('PATCH');
export const del = requestWrapper('DELETE');
