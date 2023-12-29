import { useMutation } from 'react-query';
import axios from 'axios';

const postData = async ({ endpoint, data }) => {
  const config = {
    headers: {
      // Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(endpoint, data, config);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      const { status, message } = error.response.data.error;
      if (status === 400 && message === 'Missing "data" payload in the request body') {
        throw new Error('Missing data. Please provide required information.');
      }
    }
    throw new Error('Failed to perform the operation. Please try again later.');
  }
};

const usePostData = () => {
  const mutation = useMutation(({ endpoint, data }) => postData({ endpoint, data }));
  const postDataHandler = async (endpoint, data) => {
    try {
      const result = await mutation.mutateAsync({ endpoint, data: {data} });
      return result;
    } catch (error) {
      console.error('Error in posting data:', error.message);
      throw error;
    }
  };
  return {
    postData: postDataHandler,
    isLoading: mutation.isLoading,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};
export default usePostData;