import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const languageKey = 'language'; // Define a key for storing language preference


// Initialize i18n
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: getInitialLanguage(), // Get initial language preference
    backend: {
      loadPath: '/locales/{{lng}}.json'
    },
    fallbackLng: 'en',
    debug: false,
    keySeparator: false,
    react: {
      useSuspense: false
    },
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    }
  });

// Function to get initial language preference, considering if localStorage is available
function getInitialLanguage() {
  // Check if localStorage is available
  if (typeof localStorage !== 'undefined') {
    // If available, retrieve language preference from localStorage
    return localStorage.getItem("lang") || 'ar';
  } else {
    // If not available, use a default language
    return 'ar';
  }
}

// Function to set language preference in local storage
function setLanguage(lng) {
  i18n.changeLanguage(lng);

  // Check if localStorage is available before using it
  if (typeof localStorage !== 'undefined') {
    // If available, store language preference in localStorage
    localStorage.setItem(languageKey, lng);
  }
}

export { i18n, setLanguage }; // Export i18n and setLanguage function

export default i18n;
