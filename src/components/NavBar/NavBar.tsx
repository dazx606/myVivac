import styles from  './NavBar.module.css'
import logo from '../../assets/MV.png'

export const NavBar = () => {
  return (
    <ul className={styles.navBar}>
        <li className={styles.icon}>
            <img className={styles.logo} src={logo} alt="" width={60}/>
        </li>
        <li>Inicio</li>
        <li>¿Quiénes somos?</li>
        <li>Inversionistas</li>
    </ul>
  )
}


