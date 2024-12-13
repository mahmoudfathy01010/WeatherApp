import {Image} from 'react-native';

const Images = {
  search: Image.resolveAssetSource(
    require('../../../assets/images/search.png'),
  ),
  city: Image.resolveAssetSource(require('../../../assets/images/city.png')),
  background: Image.resolveAssetSource(
    require('../../../assets/images/background.png'),
  ),
  info: Image.resolveAssetSource(require('../../../assets/images/info.png')),
  back: Image.resolveAssetSource(require('../../../assets/images/back.png')),
};

export default Images;
