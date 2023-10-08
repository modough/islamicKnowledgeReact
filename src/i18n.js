import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init({
        supportedLngs: ['en', 'fr', 'ar'],
        fallbackLng: 'en',
        debug: true,
        detection: {
            order: ['localStorage', 'htmlTag', 'cookie', 'path', 'subdomain'],
            caches: ['localStorage']
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json',
        },
        react: {
            useSuspense: false,
        }
    });

export default i18n;