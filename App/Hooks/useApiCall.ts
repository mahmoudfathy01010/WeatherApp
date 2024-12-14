import {getErrorMessage} from 'App/generics/error.helper';
import {useEffect, useState} from 'react';

const useApiCall = <T>(loadDataApi: Function, params: any) => {
  const [responseData, setResponseData] = useState<T>();

  const [isLoading, setIsLoading] = useState(false);
  const [errorObject, setErrorObject] = useState<Object>();

  const loadData = async () => {
    try {
      setIsLoading(true);
      const data = await loadDataApi(params);
      setResponseData(data);
    } catch (e) {
      setErrorObject({
        message: getErrorMessage(e),
        statusCode: e?.response?.status,
      });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    responseData,
    isLoading,
    errorObject,
    refresh: loadData,
  };
};

export default useApiCall;
