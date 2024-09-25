import React from 'react';
import "./About.scss"
import { useTranslation } from 'react-i18next'

const About = () => {

 const {t} = useTranslation("About");
  return (
    <div className='about-container'>
      <h1>{t("intro")}</h1>
    </div>
  )
}

export default About