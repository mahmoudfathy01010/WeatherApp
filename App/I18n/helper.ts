import I18n from './I18n'; // Import your i18n configuration

const translate = (text?: string, options: Object = {}) => {
  return text ? I18n.t(text, {defaultValue: text, ...options}) : '';
};

export {translate};
