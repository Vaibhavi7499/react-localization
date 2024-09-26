import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },

    fallbackLng: "en",

    returnObjects: true,
    ns: ["Home", "About","Employee"],
    // defaultNS: "Home",
    // resources: {
    //   en: {
    //     translation: {
    //       firstName: "First Name",
    //       lastName: "Last Name",
    //       mobNumber: "Mobile number",
    //       address: "Address",
    //     },
    //   },
    //   hi: {
    //     translation: {
    //       firstName: "पहला नाम",
    //       lastName: "उपनाम",
    //       mobNumber: "मोबाइल नंबर",
    //       address: "पता",
    //     },
    //   },
    //   ma: {
    //     translation: {
    //       firstName: "प्रथम नाव",
    //       lastName: "आडनाव",
    //       mobNumber: "मोबाइल नंबर",
    //       address: "पत्ता",
    //     },
    //   },
  });

export default i18n;
