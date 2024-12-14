type CityWeatherDetailsProps = {
  navigation: object;
  route: Route;
};

type Route = {
  params: Params;
};

type Params = {
  cityName: string;
  cityId: string;
};

export {CityWeatherDetailsProps};
