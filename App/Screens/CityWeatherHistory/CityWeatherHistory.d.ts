type CityWeatherHistoryProps = {
  navigation: object;
  route: Route;
};

type Route = {
  params: Params;
};

type Params = {
  cityId: string;
  cityName: string;
};
export {CityWeatherHistoryProps};
