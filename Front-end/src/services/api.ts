import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
});

interface ErrorResponse {
  message: string;
  details?: string;
}


const handleBadRequestError = (error: AxiosError<ErrorResponse>) => {
  if (error.response && error.response.status === 401 || error.response && error.response.status === 400) {
    const responseData = error.response.data as ErrorResponse;

    toast.error(responseData.message);
  }
  throw error; 
};


api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ErrorResponse>) => {
    return handleBadRequestError(error);
  }
);
