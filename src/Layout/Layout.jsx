import { NavLink } from "react-router-dom";
import "./Layout.css";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const { i18n } = useTranslation();

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
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        <div>
          {/* <button onClick={()=>i18n.changeLanguage("hi")}>Hindi</button>
                <button onClick={()=>i18n.changeLanguage("en")}>English</button>
                <button onClick={()=>i18n.changeLanguage("ma")}>Marathi</button> */}
          {languages.map((e) => (
            <button onClick={() => i18n.changeLanguage(e?.code)}>
              {e?.lang}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Layout;
