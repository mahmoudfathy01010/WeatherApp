import I18n from 'i18n-js';
import en from './locales/en.json';

// Set up translations
I18n.translations = {
  en,
};
I18n.defaultLocale = 'en';
// Enable fallback to default language
I18n.fallbacks = true;

export default I18n;
