import styles from './AboutUs.module.css'
import image from '../../assets/BackGroundAbout.jpg'
import InformationText from '../../components/InformationText/InformationText'
import Logos from '../../components/Logos/Logos'
import Environment from '../../components/Envirmoment/Environment'
import FormSection from '../../components/FormSection/FormSection'

const AboutUs = () => {

  const texts = {
    title: 'En Myvivac somos...',
    content:
      `gestores inmobiliarios apasionados por el turismo sostenible y por generar un
        impacto positivo en las personas y en la comunidad.

        En myvivac.com conectamos los diferentes actores de desarrollo inmobiliario
        turístico generando una plataforma colaborativa que genera proyectos más
        eficientes, sostenibles y conscientes.

        Por eso nuestros vivacs son industializados, modulares, transportables y
        desmontables.`
  }

  return (
    <>
      <div className={styles.backgroundImage}>
        <img src={image} alt="" className={styles.image} />
        <div className={styles.mask}></div>

      </div>
      <InformationText text={texts.content} title={texts.title} />
      <Environment />
      <FormSection/>
      <Logos />
    </>
  )
}

export default AboutUs
