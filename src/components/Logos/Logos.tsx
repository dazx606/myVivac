import styles from './Logos.module.css';
import logo1 from '../../assets/interiorLogo.png'
import logo2 from '../../assets/origenLogo.png'
import logo3 from '../../assets/essensLogo.png'
import logo4 from '../../assets/kasualLogo.png'
import logo5 from '../../assets/MyvivacLogo.png'

const Logos = () => {
  return (
    <div className={styles.container}>
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
    </div>
  )
}

export default Logos
