import {render, screen} from '@testing-library/react-native';
import HomeScreen from 'App/Screens/HomeScreen/HomeScreen';
import * as APICall from 'App/Hooks/useApiCall';
import React from 'react';
import * as I18nHelpers from 'App/I18n/helper';
import CityWeatherHistory from 'App/Screens/CityWeatherHistory/CityWeatherHistory';

describe('CityWeatherHistory testing', () => {
  test('CityWeatherHistory ui is rendered successfully', () => {
    render(<CityWeatherHistory />);
    const element = screen.getByTestId('CityWeatherHistory');

    expect(element).toBeDefined();
  });

  test('Header is rendered with title and with back', () => {
    render(<CityWeatherHistory />);
    const title = screen.getByTestId('title');
    const backButton = screen.queryByTestId('backButton');

    expect(backButton).toBeDefined();
    expect(title).toBeDefined();
  });

  test('CityWeatherHistory screen error should be rendered correctly if the response data was empty', () => {
    APICall.default = jest.fn().mockReturnValue({
      isLoading: false,
      errorObject: undefined,
      responseData: [],
      refresh: undefined,
    });
    render(<CityWeatherHistory />);
    const cityWeatherHistoryError = screen.getByTestId(
      'CityWeatherHistoryError',
    );
    expect(cityWeatherHistoryError).toBeDefined();
  });

  test('CityWeatherHistory screen error should be rendered correctly if the error object exists', () => {
    APICall.default = jest.fn().mockReturnValue({
      isLoading: false,
      errorObject: {message: 'error'},
      responseData: [{data: ''}],
      refresh: undefined,
    });
    render(<CityWeatherHistory />);
    const cityWeatherHistoryError = screen.getByTestId(
      'CityWeatherHistoryError',
    );
    expect(cityWeatherHistoryError).toBeDefined();
  });

  test('CityWeatherHistory screen loading should be rendered when is loading equals true', () => {
    APICall.default = jest.fn().mockReturnValue({
      isLoading: true,
      errorObject: {message: 'error'},
      responseData: [{data: ''}],
      refresh: undefined,
    });
    render(<CityWeatherHistory />);
    const cityWeatherHistoryLoading = screen.getByTestId(
      'CityWeatherHistoryLoading',
    );
    expect(cityWeatherHistoryLoading).toBeDefined();
  });

  test('history items should be rendered correctly in hoCityWeatherHistoryme screen when data is available', () => {
    APICall.default = jest.fn().mockReturnValue({
      isLoading: false,
      errorObject: undefined,
      responseData: [
        {
          id: 1,
          date: 1636651290,
          description: 'Clear sky',
          temperature: 285.32,
          icon: '01d',
        },
      ],
      refresh: undefined,
    });
    render(<CityWeatherHistory />);
    const firstHistoricalItem = screen.getByTestId('historicalItem0');
    expect(firstHistoricalItem).toBeDefined();
  });
});
