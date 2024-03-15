import styles from './FormSection.module.css'
import image from '../../assets/Habitacio╠ün.jpg'

const FormSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={image} alt="" className={styles.image} />
                <div className={styles.overlay}>
                    <p>¿Quieres sumarte a la experiencia vivac? Te invitamos a un café y hablamos un poco.</p>
                </div>
            </div>
            <div className={styles.form}>

            </div>
        </div>
    )
}

export default FormSection
