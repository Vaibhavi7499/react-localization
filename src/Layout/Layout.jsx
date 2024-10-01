import { NavLink, useNavigate } from "react-router-dom";
import "./Layout.scss";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const { i18n } = useTranslation("Home");
  const { t } = useTranslation("Employee");
let isLogin = JSON.parse(localStorage.getItem("isLogin"))
let navigate  = useNavigate()
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

  let logout = () => {
    localStorage.setItem("isLogin",false)
    navigate("/")
  }
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
          {
            isLogin ? 
          <li>
            <NavLink to="/emp">{t("employee")}</NavLink>
          </li>
          : ""
          }
        </ul>
      </nav>

      <nav>
        {/* <button onClick={()=>i18n.changeLanguage("hi")}>Hindi</button>
                <button onClick={()=>i18n.changeLanguage("en")}>English</button>
                <button onClick={()=>i18n.changeLanguage("ma")}>Marathi</button> */}
               { isLogin ? <button className="logout" onClick={logout}>Logout</button> : "" }
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
