import {renderHook, act} from '@testing-library/react-hooks';
import useApiCall from 'App/Hooks/useApiCall';
import {getErrorMessage} from 'App/generics/error.helper';

jest.mock('App/generics/error.helper');

describe('useApiCall Hook', () => {
  const mockApi = jest.fn();
  const mockErrorMessage = 'An error occurred';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should handle loading and fetch data successfully', async () => {
    const mockResponse = {name: 'Alex', temperature: 25};
    mockApi.mockResolvedValue(mockResponse);

    const {result, waitForNextUpdate} = renderHook(() =>
      useApiCall(mockApi, 'some-param'),
    );

    expect(result.current.isLoading).toBe(true);
    expect(result.current.responseData).toBeUndefined();
    await waitForNextUpdate();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.responseData).toEqual(mockResponse);
    expect(result.current.errorObject).toBeUndefined();
  });

  it('should handle errors correctly', async () => {
    const mockError = {response: {status: 404}};
    mockApi.mockRejectedValue(mockError);
    getErrorMessage.mockReturnValue(mockErrorMessage);

    const {result, waitForNextUpdate} = renderHook(() =>
      useApiCall(mockApi, 'some-param'),
    );
    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.responseData).toBeUndefined();
    expect(result.current.errorObject).toEqual({
      message: mockErrorMessage,
      statusCode: 404,
    });
  });

  it('should allow refreshing the data', async () => {
    const mockResponse = {name: 'Alex', temperature: 25};
    mockApi.mockResolvedValue(mockResponse);

    const {result, waitForNextUpdate} = renderHook(() =>
      useApiCall(mockApi, 'some-param'),
    );
    await waitForNextUpdate();
    act(() => {
      result.current.refresh();
    });
    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.responseData).toEqual(mockResponse);
  });
});
