import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "hi",
  resources: {
    en: {
      translation: {
        firstName: "First Name",
        lastName: "Last Name",
        mobNumber: "Mobile number",
        address: "Address",
      },
    },
    hi: {
      translation: {
        firstName: "पहला नाम",
        lastName: "उपनाम",
        mobNumber: "मोबाइल नंबर",
        address: "पता",
      },
    },
    ma: {
      translation: {
        firstName: "प्रथम नाव",
        lastName: "आडनाव",
        mobNumber: "मोबाइल नंबर",
        address: "पत्ता",
      },
    },
  },
});

export default i18n;
