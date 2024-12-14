import {render, screen} from '@testing-library/react-native';
import CityItem from 'App/Screens/HomeScreen/Components/CityItem/CityItem';

describe('CityItem Screen testing', () => {
  test('CityItem should render data correctly', () => {
    render(<CityItem cityName="alex" testID="cityItem" />);
    const cityItem = screen.getByTestId('cityItem');
    const cityName = screen.getByTestId('cityName');

    expect(cityItem).toBeDefined();
    expect(cityName.props.children).toEqual('Alex');
  });
});
