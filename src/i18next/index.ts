import { initReactI18next } from 'react-i18next'
import i18next from 'i18next'

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {},
    lng: 'ru',
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  })
