import styles from './Footer.module.css';
import logo from '../../assets/logoWhite.png';
import youtube from '../../assets/youtube.png'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
import phone from '../../assets/phone.png'
import location from '../../assets/pointer.png'
import mail from '../../assets/email.png'


const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div>
            <img src={logo} alt="" width={300} />
            <p className={styles.text}>Soluciones integrales e inteligentes para la vivienda y el turismo en Colombia.</p>
          </div>
          <div>
            <p className={styles.title}>Políticas</p>
            <p className={styles.text}>Acerca de nosotros</p>
            <p className={styles.text}>Política de datos</p>
            <p className={styles.text}>Política de privacidad</p>
            <button>Registrarse</button>
          </div>
          <div>
            <p className={styles.title}>Menú principal</p>
            <p className={styles.text}>Home</p>
            <p className={styles.text}>Nosotros</p>
            <p className={styles.text}>Blog</p>
            <p className={styles.text}>Registro</p>
            <p className={styles.text}>Contacto</p>
          </div>
          <div>
            <p className={styles.title}>Contacto</p>
            <div className={styles.logoContainer}>
              <div className={styles.logoDiv}><img src={facebook} alt="" /></div>
              <div className={styles.logoDiv}><img src={twitter} alt="" /></div>
              <div className={styles.logoDiv}><img src={youtube} alt="" /></div>
            </div>
              <div className={styles.contactContainer}>
                <img className={styles.logo} src={phone} alt=""/>
                <p>300 000 00 00</p>
              </div>
              <div className={styles.contactContainer}>
                <img className={styles.logo} src={mail} alt="" />
                <p>ingo@myvivac.com</p>
              </div>
              <div className={styles.contactContainer}>
                <img className={styles.logo} src={location} alt="" />
                <p>calle 00 sur #00 - 00</p>
              </div>
          </div>
        </div>
        <p className={styles.footerText}>
        Copyright &#169; All Rights Reserved. By UpP Consulting
        </p>
      </div>
    </>
  )
}

export default Footer
