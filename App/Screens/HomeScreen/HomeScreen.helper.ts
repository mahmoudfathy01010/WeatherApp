import Storage from 'App/Services/Storage/Storage';
import {CITIES} from 'App/Services/Storage/Storage.constants';

const deleteCityAndItsHistoricalData = async (cityId: string | undefined) => {
  if (cityId) {
    const cities = await Storage.getObject(CITIES);
    if (Array.isArray(cities)) {
      const updatedCities = cities.filter(({id}) => {
        return id !== cityId;
      });
      await Storage.setArray(CITIES, updatedCities);
      await Storage.setArray(cityId, []);
    }
  }
};

export {deleteCityAndItsHistoricalData};
