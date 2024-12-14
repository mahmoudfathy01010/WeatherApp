import {ReactNode} from 'react';
import {TextStyle} from 'react-native';

type AppTextType = {
  style?: TextStyle;
  i18nKey?: string;
  children?: ReactNode;
  translateOption?: Object;
  isCapitalized?: boolean;
  testID?: string;
};

export {AppTextType};
