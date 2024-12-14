import loadCityWeatherDetails from 'App/Services/API/Requests/CityWeatherDetails/CityWeatherDetails';
import Storage from 'App/Services/Storage/Storage';

jest.mock('App/Services/API/API.ts', () => {
  return {
    __esModule: true, // Indicate that this is a module with a default export
    default: {
      get: jest.fn().mockResolvedValue({
        data: {
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
        },
      }),
    },
  };
});
describe('CityItem Screen testing', () => {
  test('CityItem should render data correctly', async () => {
    Storage.updateArray = jest.fn();
    jest.spyOn(Date, 'now').mockImplementation(() => 1627504567890); // Mocking Date.now() to return a fixed timestamp
    await loadCityWeatherDetails({cityName: 'alex', cityId: '1'});
    expect(Storage.updateArray).toBeCalledWith('1', [
      {
        id: Date.now(),
        date: 1636651290,
        icon: '03d',
        description: 'scattered clouds',
        temperature: 285.32,
      },
    ]);
  });
});
