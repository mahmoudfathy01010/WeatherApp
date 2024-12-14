import {render, screen} from '@testing-library/react-native';
import HomeScreen from 'App/Screens/HomeScreen/HomeScreen';
import * as APICall from 'App/Hooks/useApiCall';
import React from 'react';
import * as I18nHelpers from 'App/I18n/helper';

describe('Home Screen testing', () => {
  test('HomeScreen ui is rendered successfully', () => {
    render(<HomeScreen />);
    const element = screen.getByTestId('HomeScreen');

    expect(element).toBeDefined();
  });

  test('Header is rendered with title but without back button', () => {
    render(<HomeScreen />);
    const title = screen.getByTestId('title');
    const backButton = screen.queryByTestId('backButton');

    expect(backButton).toBeNull();
    expect(title).toBeDefined();
  });

  test('home screen error should be rendered correctly if the response data was empty', () => {
    APICall.default = jest.fn().mockReturnValue({
      isLoading: false,
      errorObject: undefined,
      responseData: [],
      refresh: undefined,
    });
    render(<HomeScreen />);
    const homeScreenError = screen.getByTestId('HomeScreenError');
    expect(homeScreenError).toBeDefined();
  });

  test('home screen error should be rendered correctly if the error object exists', () => {
    APICall.default = jest.fn().mockReturnValue({
      isLoading: false,
      errorObject: {message: 'error'},
      responseData: [{data: ''}],
      refresh: undefined,
    });
    render(<HomeScreen />);
    const homeScreenError = screen.getByTestId('HomeScreenError');
    expect(homeScreenError).toBeDefined();
  });

  test('home screen loading should be rendered when is loading equals true', () => {
    APICall.default = jest.fn().mockReturnValue({
      isLoading: true,
      errorObject: {message: 'error'},
      responseData: [{data: ''}],
      refresh: undefined,
    });
    render(<HomeScreen />);
    const homeScreenLoading = screen.getByTestId('HomeScreenLoading');
    expect(homeScreenLoading).toBeDefined();
  });

  test('city items should be rendered correctly in home screen when data is available', () => {
    APICall.default = jest.fn().mockReturnValue({
      isLoading: false,
      errorObject: undefined,
      responseData: [{cityName: 'alex', id: '1'}],
      refresh: undefined,
    });
    render(<HomeScreen />);
    const firstCityItem = screen.getByTestId('CityItem0');
    expect(firstCityItem).toBeDefined();
  });
  test('Floating button ui is rendered successfully', () => {
    render(<HomeScreen />);
    const element = screen.getByTestId('floatingButton');

    expect(element).toBeDefined();
  });

  test('addCity modal should rendered successfully when isAddCityModalVisible is true', () => {
    I18nHelpers.translate = jest.fn();
    const mockSetState = jest.fn();
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(initialState => [true, mockSetState]);

    render(<HomeScreen />);
    const addCityModal = screen.queryByTestId('addCityModal');

    expect(addCityModal.props.visible).toBeTruthy();
  });

  test('remove city modal should rendered successfully when isRemoveCityModalVisible is true', () => {
    I18nHelpers.translate = jest.fn();
    const mockSetState = jest.fn();
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(initialState => [false, mockSetState])
      .mockImplementationOnce(initialState => [true, mockSetState]);

    render(<HomeScreen />);
    const removeCityModal = screen.queryByTestId('removeCityModal');

    expect(removeCityModal.props.visible).toBeTruthy();
  });
});
