import Images from 'App/Themes/Images/Images';
import {ImageBackground} from 'react-native';
import styles from './Background.style';

const Background = () => {
  return <ImageBackground style={styles.image} source={Images.background} />;
};

export default Background;
