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
            <div className={styles.formContainer}>
                <div className={styles.form}>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <input type="text" placeholder='Nombre' className={styles.input}/>
                        <input type="text" placeholder='Ciudad' className={styles.input}/>
                    </div>

                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <input type="text" placeholder='Email' className={styles.input}/>
                        <input type="text" placeholder='Teléfono' className={styles.input}/>
                    </div>

                    <h2 className={styles.title}>Tipo de inversión</h2>

                    <select  className={styles.input} style={{width:'100%'}}/>

                    <div style={{display:'flex', flexDirection:'row', gap:'1ch'}}>
                        <input type="checkbox" name="" id="" />
                        <p>Acepto las políticas de privacidad y tratamiento de datos</p>
                    </div>

                    <button className={styles.button}>Enviar</button>

                </div>
            </div>
        </div>
    )
}

export default FormSection
