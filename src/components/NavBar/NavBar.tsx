import styles from './NavBar.module.css'
import logo from '../../assets/logoWhite.png'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <ul className={styles.navBar}>
      <li className={styles.icon}>
        <img className={styles.logo} src={logo} alt="" width={80} />
      </li>
      <li><Link className={styles.link} to='/home'>Inicio</Link></li>
      <li><Link className={styles.link} to='/about_us'>¿Quiénes somos?</Link></li>
      <li><Link className={styles.link} to='/investors'>Inversionistas</Link></li>
    </ul>
  )
}


