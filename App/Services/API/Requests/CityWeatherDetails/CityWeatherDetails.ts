import APIRoutes from 'App/Services/API/APIRoutes';
import AxiosAPI from 'App/Services/API/API';
import {
  CityHistoryItem,
  CityWeatherDetailsResponse,
} from './CityWeatherDetails.d';
import {API_KEY} from 'App/Services/API/API';
import Storage from 'App/Services/Storage/Storage';

const loadCityWeatherDetails = async ({
  cityName,
  cityId,
}: {
  cityName: string;
  cityId: string;
}): Promise<CityWeatherDetailsResponse> => {
  try {
    const {URL} = APIRoutes.CityWeather;
    const {data} = (await AxiosAPI.get(URL(cityName, API_KEY), {})) as {
      data: CityWeatherDetailsResponse;
    };
    await saveRequestToCityHistoryData(data, cityId);
    return data;
  } catch (error) {
    throw error;
  }
};

const saveRequestToCityHistoryData = async (
  cityWeatherDetailsResponse: CityWeatherDetailsResponse,
  cityId: string,
) => {
  const history: CityHistoryItem = {
    id: Date.now(),
    date: cityWeatherDetailsResponse?.dt,
    icon: cityWeatherDetailsResponse?.weather?.[0]?.icon,
    description: cityWeatherDetailsResponse?.weather?.[0]?.description,
    temperature: cityWeatherDetailsResponse?.main?.temp,
  };

  await Storage.updateArray(cityId, [history]);
};

export default loadCityWeatherDetails;
