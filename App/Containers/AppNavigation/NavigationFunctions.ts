import {AppNavRef} from './AppNavigation';

export default {
  navigate: (routeName: string, params: Object = {}) => {
    AppNavRef?.navigate(routeName, params);
  },
  goBack: () => {
    AppNavRef?.goBack();
  },
};
