import {translate} from 'App/I18n/helper';
import {Text} from 'react-native';
import {AppTextType} from './AppText.d';

const AppText = ({
  style,
  i18nKey,
  children,
  translateOption,
  ...props
}: AppTextType) => {
  return (
    <Text style={style} {...props}>
      {children || translate(i18nKey, translateOption)}
    </Text>
  );
};

export default AppText;
