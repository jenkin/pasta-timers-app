import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import it from './locales/it.json'
import en from './locales/en.json'

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            it: { translation: it },
            en: { translation: en }
        },

        lng: 'it',

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    })

export default i18n
