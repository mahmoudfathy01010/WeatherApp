import Images from 'App/Themes/Images/Images';
import {Image, ImageBackground, View} from 'react-native';
import styles from './Background.style';

const Background = () => {
  return <ImageBackground style={styles.image} source={Images.background} />;
};

export default Background;
