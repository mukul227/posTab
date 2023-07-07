import axios from 'axios';
import { strings } from '@/localization';
import { store } from '@/store';
import * as RNLocalize from 'react-native-localize';
import { API_URLS_USING_POS_USER_ACCESS_TOKEN } from '@/utils/APIinventory';
import { getDeviceToken } from '@/utils/Notifications';
import { Alert } from 'react-native';
import { logoutUserFunction } from '@/actions/UserActions';
import { logoutFunction } from '@/actions/AuthActions';
import { useDispatch, useSelector } from 'react-redux';

const getTimeZone = RNLocalize.getTimeZone();

const client = axios.create({});

client.interceptors.request.use(async function (config) {
  const register = store.getState().auth?.merchantLoginData?.token;
  const user = store.getState().user?.posLoginData?.token;
  const fcmToken = await getDeviceToken();
  console.log('user', user);
  console.log('register', register);

  /**
   * @API_URLS_USING_POS_USER_ACCESS_TOKEN - Add URLs of API in this array which requires pos user token
   * @returns Token for api call
   */
  const getRole = () => {
    if (API_URLS_USING_POS_USER_ACCESS_TOKEN.includes(config.url)) {
      return { token: user, appName: 'pos' };
    } else {
      return { token: register, appName: 'merchant' };
    }
  };

  config.headers = {
    ...config.headers,
    timezone: getTimeZone,
    Authorization: getRole().token,
    'app-name': getRole().appName,
  };

  if (fcmToken) {
    config.headers['fcm-token'] = fcmToken;
  }

  return config;
});

client.interceptors.response.use(
  response =>
    response.status === 204
      ? Promise.reject({ error: 'emptyContent', statusCode: 204 })
      : response.data,
  error => {
    if (error.response) {
      if (error.response.data.msg === 'invalid_token') {
        // Show an alert in React Native
        Alert.alert('Invalid Token', 'Please login again.', [
          {
            text: 'Ok',
            onPress: () => {
              store.dispatch(logoutUserFunction());
              store.dispatch(logoutFunction());
            },
            style: 'Ok',
          },
        ]);
      }
      return Promise.reject(error.response.data);
    } else if (error.request) {
      return Promise.reject({ error: strings.common.connectionError });
    } else {
      return Promise.reject(error);
    }
  }
);

const setAuthorization = token => {
  client.defaults.headers.common.authorization = token;
};

const clearAuthorization = () => {
  delete client.defaults.headers.common.authorization;
};

export const HttpClient = { ...client, setAuthorization, clearAuthorization };
