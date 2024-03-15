import Logos from "../../components/Logos/Logos";
import styles from './Investors.module.css';
import image from '../../assets/BackGroundInvestors.jpg'
import Models from "../../components/Models/Models";
import FormSection from "../../components/FormSection/FormSection";


const Investors = () => {



  return (
    <>
      <div className={styles.backgroundImage}>
        <img src={image} alt="" className={styles.image} />
        <div className={styles.mask}></div>

      </div>
      <Models />
      <FormSection />
      <Logos />
    </>
  )
}

export default Investors
