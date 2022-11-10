import axios from 'axios';
import { any } from 'prop-types';
import {
  useState
} from 'react';

const UseRequest = ({
  onSuccess
}) => {
  const [errors, setErrors] = useState(null);
  const instance = axios.create({
    //baseURL: process.env.REACT_APP_BASEURL, //启用barseUrl有跨域的问题
    withCredentials: true,
    timeout: 30000, // 请求的超时时间
  });
  const doRequest = async (url, method, body) => {
    try {
      setErrors(null);
      const response = await instance[method](url, body);

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(err.message);
    }
  };

  return {
    doRequest,
    errors
  };
};


export default UseRequest;