import {translate} from 'App/I18n/helper';
import {Text} from 'react-native';
import {AppTextType} from './AppText.d';
import _ from 'lodash';

const AppText = ({
  style,
  i18nKey,
  children,
  translateOption,
  isCapitalized,
  ...props
}: AppTextType) => {
  return (
    <Text
      style={style}
      {...props}
      numberOfLines={1} // Restricts the text to one line
      ellipsizeMode="tail">
      {children || isCapitalized
        ? _.capitalize(translate(i18nKey, translateOption))
        : translate(i18nKey, translateOption)}
    </Text>
  );
};

export default AppText;
