import React, { useContext } from "react";
import "./Home.css";
import { HomeContext } from "../../contexts/HomeContext";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("Home");

  const { firstName, lastName, mobNumber, address } = useContext(HomeContext);

  return (
    <div className="home-container">
      <div className="first-name flex-c">
        <h4>{t("firstName")} : </h4>
        <p>{firstName}</p>
      </div>
      <div className="last-name flex-c">
        <h4> {t("lastName")} : </h4>
        <p>{lastName}</p>
      </div>
      <div className="mobile-number flex-c">
        <h4>{t("mobNumber")} : </h4>
        <p>{mobNumber}</p>
      </div>
      <div className="address flex-c">
        <h4>{t("address")} : </h4>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default Home;
