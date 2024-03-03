import styles from './InformationHome.module.css'
import yoga from '../../assets/yoga.jpg'
import tablet from '../../assets/tablet.jpg'
import fruits from '../../assets/fruits.jpg'
import exterior from '../../assets/exterior.jpg'
import vivac from '../../assets/vivac.png'
import field from '../../assets/field.jpg'
import logo1 from '../../assets/essensLogoColor.png'
import logo2 from '../../assets/origenLogoColor.png'
import logo3 from '../../assets/kasualLogoColor.png'

const InformationHome = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <h1>En Myvivac promovemos...</h1>
                <div className={styles.infoContainer}>
                    <div className={styles.imageContainer}>
                        <img src={fruits} alt="" className={styles.image}/>
                        <h3 className={styles.subTitle}>Alimentación consciente</h3>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={yoga} alt="" className={styles.image}/>
                        <h3 className={styles.subTitle}>Bienestar físico y salud mental</h3>

                    </div>
                    <div className={styles.imageContainer}>
                        <img src={tablet} alt="" className={styles.image}/>
                        <h3 className={styles.subTitle}>Consciencia financiera</h3>

                    </div>
                </div>
            </div>
            <div className={styles.subContainer}>
                <h1>En Myvivac promovemos...</h1>
                <div className={styles.infoContainer}>
                    <div className={styles.imageContainer}>
                        <img src={vivac} alt="" className={styles.image}/>
                        <img src={logo1} alt="" className={styles.logo}/>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={field} alt="" className={styles.image}/>
                        <img src={logo2} alt="" className={styles.logo}/>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={exterior} alt="" className={styles.image}/>
                        <img src={logo3} alt="" className={styles.logo}/>
                    </div>
                </div>
            </div>


        </div>
        <div className={styles.black}/>
        </>

    )
}

export default InformationHome
