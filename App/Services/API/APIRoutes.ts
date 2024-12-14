const APIRoutes = {
  CityWeather: {
    URL: (cityName: string, APIId: string) =>
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIId}`,
    API_ID: 'CityWeather',
  },
};

export default APIRoutes;
