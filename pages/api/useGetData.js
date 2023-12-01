import { useQuery } from 'react-query';
import axios from 'axios';

const fetchData = async (endpoint) => {

  const config = { 
    headers: {
      // Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(endpoint,config);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch data from the ${endpoint}.`);
  }
};

const useGetData = (endpoint) => {
  return useQuery([endpoint], () => fetchData(endpoint));
};

export default useGetData;
