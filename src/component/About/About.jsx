import React from 'react'
import { useTranslation } from 'react-i18next'

const About = () => {

 const {t} = useTranslation("About");
  return (
    <div>
      <h1>{t("intro")}</h1>
    </div>
  )
}

export default About