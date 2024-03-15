import styles from './Environment.module.css'
import EnvironmentCard from "../EnvironmentCard/EnvironmentCard"
import logo1 from '../../assets/8.svg'
import logo2 from '../../assets/9.png'
import logo3 from '../../assets/2.svg'
import logo4 from '../../assets/6.svg'
import logo5 from '../../assets/7.svg'
import logo6 from '../../assets/hand-shake.svg'

const Environment = () => {
  return (
    <div className={styles.container}>
      <h1>Nuestro ecosistema...</h1>
      <div className={styles.cardContainer}>
        <EnvironmentCard text="Operadores" img={logo1}/>
        <EnvironmentCard text={`Propietario \nde lote`} img={logo2}/>
        <EnvironmentCard text="Inversionista" img={logo3}/>
      </div>
      <div className={styles.cardContainer}>
        <EnvironmentCard text="Constructores" img={logo4}/>
        <EnvironmentCard text="Instituciones" img={logo5}/>
        <EnvironmentCard text="Aliados" img={logo6}/>
      </div>
      
    </div>
  )
}

export default Environment
