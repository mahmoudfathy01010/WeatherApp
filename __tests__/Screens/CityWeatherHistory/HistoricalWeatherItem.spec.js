import {render, screen} from '@testing-library/react-native';
import HistoricalWeatherItem from 'App/Screens/CityWeatherHistory/HistoricalWeatherItem/HistoricalWeatherItem';

describe('HistoricalWeatherItem Screen testing', () => {
  test('HistoricalWeatherItem should render data correctly', () => {
    render(
      <HistoricalWeatherItem
        date={1636651290}
        description={'Clear sky'}
        temperature={285.32}
        testID="historicalItem"
      />,
    );
    const historicalWeatherItem = screen.getByTestId('historicalItem');
    const date = screen.getByTestId('date');
    const descriptionAndTemp = screen.getByTestId('descriptionAndTemp');

    expect(historicalWeatherItem).toBeDefined();
    expect(date.props.children).toEqual('11.11.2021 - 19:21');
    expect(descriptionAndTemp.props.children).toEqual([
      'Clear sky',
      ', ',
      12,
      '°C',
    ]);
  });
});
