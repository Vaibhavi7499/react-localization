import { NavLink } from "react-router-dom";
import "./Layout.scss";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const { i18n } = useTranslation("Home");
  const { t } = useTranslation("Employee");

  const languages = [
    {
      code: "hi",
      lang: "Hindi",
    },
    {
      code: "ma",
      lang: "Marathi",
    },
    {
      code: "en",
      lang: "English",
    },
  ];

  return (
    <div className="layout-container">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/emp">{t("employee")}</NavLink>
          </li>
        </ul>
      </nav>

      <nav>
        {/* <button onClick={()=>i18n.changeLanguage("hi")}>Hindi</button>
                <button onClick={()=>i18n.changeLanguage("en")}>English</button>
                <button onClick={()=>i18n.changeLanguage("ma")}>Marathi</button> */}
        {languages.map((e) => (
          <button
            className={i18n?.language === e?.code ? "selected" : ""}
            key={e?.code}
            onClick={() => i18n.changeLanguage(e?.code)}
          >
            {e?.lang}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Layout;
