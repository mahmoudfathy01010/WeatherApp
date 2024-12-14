import {render, screen} from '@testing-library/react-native';
import CityWeatherDetails from 'App/Screens/CityWeatherDetails/CityWeatherDetails';
import * as APICall from 'App/Hooks/useApiCall';

describe('CityWeatherDetails Screen testing', () => {
  test('CityWeatherDetails ui is rendered successfully', () => {
    render(<CityWeatherDetails />);
    const element = screen.getByTestId('CityWeatherDetailsScreen');

    expect(element).toBeDefined();
  });

  test('Header is rendered with back button and without title', () => {
    render(<CityWeatherDetails />);
    const title = screen.queryByTestId('title');
    const backButton = screen.queryByTestId('backButton');

    expect(backButton).toBeDefined();
    expect(title).toBeNull();
  });

  test('CityWeatherDetails screen error should be rendered correctly if the response data was empty', () => {
    APICall.default = jest.fn().mockReturnValue({
      isLoading: false,
      isError: undefined,
      responseData: undefined,
      refresh: undefined,
    });
    render(<CityWeatherDetails />);
    const CityWeatherDetailsScreenError = screen.getByTestId(
      'CityWeatherDetailsError',
    );
    expect(CityWeatherDetailsScreenError).toBeDefined();
  });

  test('CityWeatherDetails screen error should be rendered correctly if errorObject exists', () => {
    APICall.default = jest.fn().mockReturnValue({
      isLoading: false,
      errorObject: {},
      responseData: {},
      refresh: undefined,
    });
    render(<CityWeatherDetails />);
    const CityWeatherDetailsScreenError = screen.getByTestId(
      'CityWeatherDetailsError',
    );
    expect(CityWeatherDetailsScreenError).toBeDefined();
  });

  test('CityWeatherDetails screen loading should be rendered when is loading equals true', () => {
    APICall.default = jest.fn().mockReturnValue({
      isLoading: true,
      errorObject: undefined,
      responseData: undefined,
      refresh: undefined,
    });
    render(<CityWeatherDetails />);
    const CityWeatherDetailsScreenLoading = screen.getByTestId(
      'CityWeatherDetailsLoading',
    );
    expect(CityWeatherDetailsScreenLoading).toBeDefined();
  });

  test('CityWeatherDetails screen details should be rendered correctly in CityWeatherDetails screen when data is available', () => {
    APICall.default = jest.fn().mockReturnValue({
      isLoading: false,
      errorObject: undefined,
      responseData: mockCityWeatherDetailsResponse,
      refresh: undefined,
    });
    render(<CityWeatherDetails />);
    const cityWeatherDetailsContent = screen.getByTestId(
      'CityWeatherDetailsContent',
    );
    const cityName = screen.getByTestId('cityName');
    const description = screen.getByTestId('description');
    const temprature = screen.getByTestId('temprature');
    const humidity = screen.getByTestId('humidity');
    const windspeed = screen.getByTestId('windspeed');

    expect(cityWeatherDetailsContent).toBeDefined();
    expect(cityName.props.children).toEqual('New York');
    expect(description.props.children).toEqual('scattered clouds');
    expect(temprature.props.children).toEqual('12° C');
    expect(humidity.props.children).toEqual('75%');
    expect(windspeed.props.children).toEqual('5.14 km/h');
  });
});

const mockCityWeatherDetailsResponse = {
  base: 'stations',
  clouds: {
    all: 75,
  },
  cod: 200,
  coord: {
    lat: 40.7128,
    lon: -74.006,
  },
  dt: 1636651290,
  id: 5128581,
  main: {
    feels_like: 280.15,
    grnd_level: 1012,
    humidity: 75,
    pressure: 1015,
    sea_level: 1015,
    temp: 285.32,
    temp_max: 286.85,
    temp_min: 283.87,
  },
  name: 'New York',
  sys: {
    country: 'US',
    id: 12345,
    sunrise: 1636638300,
    sunset: 1636680300,
    type: 1,
  },
  timezone: -14400,
  visibility: 10000,
  weather: [
    {
      description: 'scattered clouds',
      icon: '03d',
      id: 802,
      main: 'Clouds',
    },
  ],
  wind: {
    deg: 180,
    speed: 5.14,
    gust: 7.2,
  },
};
